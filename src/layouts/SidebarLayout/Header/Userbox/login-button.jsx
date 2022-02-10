import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button } from '@mui/material';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Box sx={{ m: 1 }}>
            <Button color="primary" onClick={() => loginWithRedirect()} fullWidth>
                <LoginIcon sx={{ mr: 1 }} />
                Log In
            </Button>
        </Box>
    );
};

export default LoginButton;
