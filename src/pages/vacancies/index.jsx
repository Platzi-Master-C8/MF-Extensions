import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Vacancies = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h1">Extensions page</Typography>
            Vacancy list
            <Link style={{ display: 'block', margin: '1rem 0' }} to={`/vacancies/${1}`}>
                1
            </Link>
        </Container>
    );
};

export default Vacancies;
