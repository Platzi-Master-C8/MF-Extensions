import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';
import PageHeader from './PageHeader';
import PageTitleWrapper from '../components/atoms/PageTitleWrapper';
import Footer from '../components/organisms/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Crypto Dashboard</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                    <Grid item xs={12}></Grid>
                    <Grid item lg={8} xs={12}>
                        <Wallets />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <AccountSecurity />
                    </Grid>
                    <Grid item xs={12}>
                        <WatchList />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Dashboard;
