import { Box, Container, Link, Typography } from '@mui/material';

import React from 'react';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`
);

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
              &copy; 2022 - Extensions Squad * Cohort 8 * Platzi Master
            </Typography>
          </Box>
          <Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
            Development by{' '}
            <Link
              href="https://master.platzi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platzi Master
            </Link>
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
