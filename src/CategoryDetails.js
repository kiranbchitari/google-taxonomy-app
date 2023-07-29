// CategoryDetails.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const CategoryDetails = ({ details }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', width: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Category Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Category ID: {details.id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Category Name: {details.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Complete Path: {details.path.join(' > ')}</Typography>
        </Grid>
      </Grid>
      {/* Add more details as needed */}
    </Paper>
  );
};

export default CategoryDetails;
