import { Box } from '@mui/material';
import React from 'react';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';

const HeaderButtons = () => {
  return (
    <Box sx={{ mr: 1 }}>
      <HeaderSearch />
      <Box sx={{ mx: .5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
