import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { getVacancies } from '../../modules/vacancies/vacancy.request';

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        const getVacanciesData = async () => {
            const currentVacancies = await getVacancies();
            setVacancies(currentVacancies);
        };
        getVacanciesData();
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h1">Extensions page</Typography>
            Vacancy list
            {vacancies.map((vacancy) => (
                <Link key={vacancy.id} style={{ display: 'block', margin: '1rem 0' }} to={`/vacancies/${vacancy.id}`}>
                    {vacancy.title}
                </Link>
            ))}
        </Container>
    );
};

export default Vacancies;
