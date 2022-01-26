import React from 'react';
import { Button, Grid, Typography } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

const PageHeader = () => {
  const user = {
    name: "Extensions Frontend",
    avatar: "../../../../public/static/images/avatars/1.jpg",
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Vacancies
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your applications
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create new
        </Button>
      </Grid>
    </Grid>
  );
}
export default PageHeader;
