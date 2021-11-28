import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import VacancyList from 'Components/templates/VacancyList';

import { makeStyles } from '@mui/styles';

import 'Styles/themeExample.scss';
import { COLORS } from 'Constants/colors.constants';

const useStyle = makeStyles({
    colorContent: {
        display: 'grid',
        gap: 10,
        gridTemplateColumns: 'repeat(auto-fill, 60px)',
    },
    boxColor: {
        width: 60,
        height: 60,
    },
});

const Extensions = () => {
    const css = useStyle();
    return (
        <Container maxWidth="md">
            <Typography variant="h1">Extensions page</Typography>
            <VacancyList />
        </Container>
    );
};

export default Extensions;
