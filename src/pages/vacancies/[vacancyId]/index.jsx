import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

const Vacancy = () => {
    const params = useParams();
    return (
        <Container maxWidth="md">
            <Typography variant="h1">Vacancy detail</Typography>
            Detail vacancy {params.vacancyId}
        </Container>
    );
};

export default Vacancy;
