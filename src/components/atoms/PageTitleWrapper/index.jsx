import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import React from 'react';

const PageTitle = styled(Box)(
    ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

const PageTitleWrapper = ({ children }) => {
    return (
        <PageTitle>
            <Container maxWidth="lg">{children}</Container>
        </PageTitle>
    );
};

PageTitleWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTitleWrapper;
