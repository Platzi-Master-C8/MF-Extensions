import React from 'react';
import { Grid, Typography } from '@mui/material';

const PageHeader = () => {
    const user = {
        name: 'Extensions Frontend',
        avatar: '../../../../public/static/images/avatars/1.jpg',
    };
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h3" component="h3" gutterBottom>
                    Vacancies
                </Typography>
                <Typography variant="subtitle2">{user.name}, these are your applications</Typography>
            </Grid>
            <Grid item />
        </Grid>
    );
};
export default PageHeader;
