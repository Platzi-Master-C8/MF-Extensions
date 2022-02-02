import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import routes from './routes';

const App = () => {
    const content = useRoutes(routes);
    const loginURL = `https://platzimaster.us.auth0.com/authorize?response_type=${process.env.TOKEN}&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&audience=${process.env.AUDIENCE}`;
    
    const getToken = () => {
        if (window.location.hash) {
            const token = window.location.hash.split('=')[1].split('&')[0];
            localStorage.setItem('token', token);
        }
    };

    const verifyIfToken = () => {
        if (!localStorage.getItem('token')) {
            window.location.href = loginURL;
        }
        if (window.location.hash.includes('access')) {
            window.location.href = '/vacancies';
        }
    };

    getToken();
    verifyIfToken();

    return (
        <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                {content}
            </LocalizationProvider>
        </ThemeProvider>
    );
};
export default App;
