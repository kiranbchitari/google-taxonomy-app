// CategoryDetails.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const CategoryDetails = ({ details }) => {
  const labelStyle = { fontWeight: 'bold' };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px auto', maxWidth: '600px' }}>
      <Typography variant="h5" gutterBottom align="center" style={labelStyle}>
        Category Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1" style={labelStyle}>
            Category ID:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{details.id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={labelStyle}>
            Category Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{details.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={labelStyle}>
            Complete Path:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{details.path.join(' > ')}</Typography>
        </Grid>
      </Grid>
      {/* Add more details as needed */}
      </Paper>
  );
};

export default CategoryDetails;