import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import PageHeader from './PageHeader';
import PageTitleWrapper from '../components/atoms/PageTitleWrapper';
import Footer from '../components/organisms/Footer';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Vacancies Dashboard</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} />
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Dashboard;
