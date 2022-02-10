import { styled } from '@mui/material/styles';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from './Sidebar';
import Header from './Header';
import PageTitleWrapper from '../../components/atoms/PageTitleWrapper';
import PageHeader from '../../components/organisms/PageHeader';

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
    const { isAuthenticated } = useAuth0();
    return (
        <React.Fragment>
            <Sidebar />
            <MainWrapper>
                <Header />
                <MainContent>
                    {!isAuthenticated && (
                        <div>
                            <PageTitleWrapper>
                                <PageHeader />
                            </PageTitleWrapper>
                            <Container maxWidth="lg">
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="stretch"
                                    spacing={3}
                                >
                                    <div style={{ height: 700, width: '100%' }}>Please login</div>
                                </Grid>
                            </Container>
                        </div>
                    )}
                    <Outlet />
                </MainContent>
            </MainWrapper>
        </React.Fragment>
    );
};

export default SidebarLayout;
