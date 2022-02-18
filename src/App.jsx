import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import ThemeProvider from './theme/ThemeProvider';
import SidebarLayout from './layouts/SidebarLayout';
import Vacancies from './pages/Vacancies';
import Vacancy from './pages/Vacancies/Vacancy';
import SuspenseLoader from './components/atoms/SuspenseLoader';

const App = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <SuspenseLoader />;
    }

    return (
        <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<SidebarLayout />}>
                        <Route path="vacancies" element={<Vacancies />} />
                        <Route path="vacancies/:vacancyId" element={<Vacancy />} />
                    </Route>
                </Routes>
            </LocalizationProvider>
        </ThemeProvider>
    );
};
export default App;
