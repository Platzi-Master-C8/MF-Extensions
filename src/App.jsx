import React from 'react';
import Routes from 'Routes';
import { THEME } from 'Constants/theme.constant';
import { ThemeProvider } from '@mui/material';
import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
