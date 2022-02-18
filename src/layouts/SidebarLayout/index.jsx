import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainWrapper = styled(Box)(
    ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;

        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`,
);

const MainContent = styled(Box)(
    ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`,
);

const SidebarLayout = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
        if (!window.location.href.includes('vacancies')) {
            window.location.href = '/vacancies';
        }
    }, [isAuthenticated, loginWithRedirect]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <React.Fragment>
            <Sidebar />
            <MainWrapper>
                <Header />
                <MainContent>
                    <Outlet />
                </MainContent>
            </MainWrapper>
        </React.Fragment>
    );
};

export default SidebarLayout;
