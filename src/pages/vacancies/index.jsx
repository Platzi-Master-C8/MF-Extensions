import { Container, Grid } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../../components/organisms/Footer';
import PageTitleWrapper from '../../components/atoms/PageTitleWrapper';
import PageHeader from '../../components/organisms/PageHeader';
import VacanciesData from './VacanciesData';

const Vacancies = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Vacancies - Applications</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                    <div style={{ height: 700, width: '100%' }}>
                        <VacanciesData />
                    </div>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Vacancies;
