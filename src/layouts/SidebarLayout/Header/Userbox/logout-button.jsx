import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button } from '@mui/material';

import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <Box sx={{ m: 1 }}>
            <Button
                color="primary"
                onClick={() =>
                    logout({
                        returnTo: window.location.origin,
                    })
                }
                fullWidth
            >
                <LockOpenTwoToneIcon sx={{ mr: 1 }} />
                Log Out
            </Button>
        </Box>
    );
};
export default LogoutButton;
