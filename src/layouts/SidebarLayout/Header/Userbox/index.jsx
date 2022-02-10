import React, { useRef, useState } from 'react';

import { Avatar, Box, Button, Divider, Hidden, lighten, Popover, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LogoutButton from './logout-button';
import LoginButton from './login-button';

const UserBoxButton = styled(Button)(
    ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`,
);

const MenuUserBox = styled(Box)(
    ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`,
);

const UserBoxText = styled(Box)(
    ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
);

const UserBoxLabel = styled(Typography)(
    ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`,
);

const UserBoxDescription = styled(Typography)(
    ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`,
);

const HeaderUserbox = () => {
    const ref = useRef(null);
    const { isAuthenticated, user: currentUser } = useAuth0();
   
    const user = {
        name: currentUser ? currentUser.name : '',
        avatar: currentUser ? currentUser.picture : '',
        jobtitle: currentUser ? currentUser.email : '',
    };
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
                <Avatar variant="rounded" alt={user.name} src={user.avatar} />
                <Hidden mdDown>
                    <UserBoxText>
                        <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                        <UserBoxDescription variant="body2">{user.jobtitle}</UserBoxDescription>
                    </UserBoxText>
                </Hidden>
                <Hidden smDown>
                    <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
                </Hidden>
            </UserBoxButton>
            <Popover
                anchorEl={ref.current}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuUserBox sx={{ minWidth: 210 }} display="flex">
                    <Avatar variant="rounded" alt={user.name} src={user.avatar} />
                    <UserBoxText>
                        <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
                        <UserBoxDescription variant="body2">{user.jobtitle}</UserBoxDescription>
                    </UserBoxText>
                </MenuUserBox>
                <Divider sx={{ mb: 0 }} />
                <Divider />
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Popover>
        </React.Fragment>
    );
};

export default HeaderUserbox;
