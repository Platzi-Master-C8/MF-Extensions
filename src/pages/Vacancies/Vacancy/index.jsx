/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Container,
    Box,
    InputLabel,
    Input,
    FormHelperText,
    FormControl,
    Button,
    IconButton,
} from '@mui/material';
import { StarRate } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getVacancy } from '../../../modules/vacancies/vacancy.request';
import useStyles from './vacancy.styles';

const Vacancy = ({ vacancy: selectedVacancy, selectVacancy }) => {
    const params = useParams();
    const classes = useStyles();
    const [vacancy, setVacancy] = useState(selectedVacancy);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const getVacancyData = async () => {
            if (params?.vacancyId) {
                const currentVacancy = await getVacancy(1, params.vacancyId);
                setVacancy(currentVacancy);
            }
        };
        getVacancyData();
    }, [params?.vacancyId]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const renderInputs = () => {
        const { id, updatedAt, user_id, createdAt, interest, link, ...currentVacancy } = vacancy;
        return Object.keys(currentVacancy).map((key) => (
            <React.Fragment>
                <FormControl>
                    <InputLabel htmlFor="component-helper">{key}</InputLabel>
                    <Input value={vacancy[key]} onChange={handleChange} aria-describedby="component-helper-text" />
                    <FormHelperText id="component-helper-text" />
                </FormControl>
                <br />
                <br />
            </React.Fragment>
        ));
    };
    if (vacancy) {
        return (
            <Container maxWidth="md">
                <IconButton
                    onClick={() => {
                        selectVacancy(null);
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant="h1">{vacancy.title}</Typography>
                <Button variant="text" href={vacancy.link}>
                    {vacancy.link}
                </Button>
                <br />
                <br />
                <Box className={classes.main}>
                    <form className={classes.form} noValidate autoComplete="off">
                        {renderInputs()}
                    </form>
                    <Box className={classes.section}>
                        <Box className={classes.contact}>
                            <Typography variant="h5">Contact data</Typography>
                        </Box>
                        <Box className={classes.score}>
                            <Typography variant="h5">Score</Typography>
                            {Array.from(Array(vacancy.interest).keys()).map(() => (
                                <StarRate />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        );
    }
    return <Typography variant="h4">Select a vacancy</Typography>;
};

export default Vacancy;
