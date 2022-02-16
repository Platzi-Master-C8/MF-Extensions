/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Container, Box, Button, TextField } from '@mui/material';
import { StarRate } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getVacancy, updateVacancy } from '../../../modules/vacancies/vacancy.request';
import useStyles from './vacancy.styles';
import SuspenseLoader from '../../../components/atoms/SuspenseLoader';

const Vacancy = () => {
    const params = useParams();
    const classes = useStyles();
    const [isLoading, setIsloading] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    const [vacancy, setVacancy] = useState();
    const [formData, setFormData] = useState();

    useEffect(() => {
        const getVacancyData = async () => {
            if (params?.vacancyId) {
                setIsloading(true);
                const token = await getAccessTokenSilently();
                const currentVacancy = await getVacancy(params.vacancyId, token);
                setVacancy(currentVacancy);
                setFormData(currentVacancy);
                setIsloading(false);
            }
        };
        getVacancyData();
    }, [getAccessTokenSilently, params.vacancyId]);

    const updateVacancyData = async () => {
        setIsloading(true);
        const token = await getAccessTokenSilently();
        await updateVacancy(params.vacancyId, { ...vacancy, ...formData }, token);
        setIsloading(false);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const renderInputs = () => {
        const { id, updatedAt, user_id, createdAt, interest, link, ...currentVacancy } = vacancy;
        return Object.keys(currentVacancy).map((key) => (
            <React.Fragment key={uuidv4()}>
                <TextField
                    name={key}
                    placeholder={key}
                    value={formData[key] || ''}
                    onChange={handleChange}
                    aria-describedby="component-helper-text"
                />
                <br />
                <br />
            </React.Fragment>
        ));
    };

    const renderBackButton = () => {
        return (
            <Box
                sx={{
                    float: 'left',
                    margin: '20px 20px',
                }}
            >
                <Link href="/vacancies" to="/vacancies">
                    <ArrowBackIosIcon />
                </Link>
            </Box>
        );
    };

    if (isLoading) {
        return (
            <Container maxWidth="md">
                {renderBackButton()}
                <SuspenseLoader />
            </Container>
        );
    }

    if (vacancy) {
        return (
            <Container maxWidth="md">
                {renderBackButton()}
                <Box>
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
                                    <StarRate key={uuidv4()} />
                                ))}
                            </Box>
                        </Box>
                        <Button variant="contained" onClick={updateVacancyData}>
                            Save
                        </Button>
                    </Box>
                </Box>
            </Container>
        );
    }
    return <Typography variant="h4">Select a vacancy</Typography>;
};

export default Vacancy;
