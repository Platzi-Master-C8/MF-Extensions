import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../../components/organisms/Footer';
import PageTitleWrapper from '../../components/atoms/PageTitleWrapper';
import PageHeader from '../../components/organisms/PageHeader';
import VacanciesData from './VacanciesData';
import Vacancy from './Vacancy';

const Vacancies = () => {
    const [selectedVacancy, setSelectedVacancy] = useState();

    const handleSelectVacancy = (currentVacancy) => {
        setSelectedVacancy(currentVacancy);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Vacancies - Applications</title>
            </Helmet>
            {!selectedVacancy ? (
                <div>
                    <PageTitleWrapper>
                        <PageHeader />
                    </PageTitleWrapper>
                    <Container maxWidth="lg">
                        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                            <div style={{ height: 700, width: '100%' }}>
                                <VacanciesData selectVacancy={handleSelectVacancy} selectedVacancy={selectedVacancy} />
                            </div>
                        </Grid>
                    </Container>
                </div>
            ) : (
                <div>
                    <PageTitleWrapper>
                        <PageHeader />
                    </PageTitleWrapper>
                    <Container maxWidth="lg">
                        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                            <div style={{ height: 700, width: '100%' }}>
                                <Vacancy vacancy={selectedVacancy} selectVacancy={handleSelectVacancy} />
                            </div>
                        </Grid>
                    </Container>
                </div>
            )}
            <Footer />
        </React.Fragment>
    );
};

export default Vacancies;
