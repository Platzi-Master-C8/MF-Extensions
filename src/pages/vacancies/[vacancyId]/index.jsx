import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { Box, InputLabel, Input, FormHelperText, FormControl, Button } from '@mui/material';
import { getVacancy } from '../../../modules/vacancies/vacancy.request';
import useStyles from './vacancy.styles';

const Vacancy = () => {
    const params = useParams();
    const classes = useStyles();
    const [vacancy, setVacancy] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const getVacancyData = async () => {
            const currentVacancy = await getVacancy(1, params.vacancyId);
            setVacancy(currentVacancy);
        };
        getVacancyData();
    }, [params.vacancyId]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const renderInputs = () => {
        return Object.keys(vacancy).map((key) => (
            <FormControl>
                <InputLabel htmlFor="component-helper">{key}</InputLabel>
                <Input value={vacancy[key]} onChange={handleChange} aria-describedby="component-helper-text" />
                <FormHelperText id="component-helper-text" />
            </FormControl>
        ));
    };
    return (
        <Container maxWidth="md">
            <Typography variant="h1">{vacancy.title}</Typography>
            <Button variant="text" href={vacancy.link}>
                {vacancy.link}
            </Button>
            <form className={classes.root} noValidate autoComplete="off">
                {renderInputs()}
            </form>
            <Box>
                <Typography variant="h4">Contact data</Typography>
            </Box>
            <Box>
                <Typography variant="h4">Score</Typography>
            </Box>
        </Container>
    );
};

export default Vacancy;
