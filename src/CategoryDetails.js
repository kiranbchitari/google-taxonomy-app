// CategoryDetails.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const CategoryDetails = ({ details }) => {
  const labelStyle = { fontWeight: 'bold' };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px auto', maxWidth: '600px' }}>
      <Typography variant="h5" gutterBottom align="center">
        Category Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1" style={labelStyle}>
            ID:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{details.id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={labelStyle}>
            Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{details.name}</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="body1" style={labelStyle}>
            Image:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {details.imageUrl && (
            <img src={details.imageUrl} alt={details.name} style={{ width: '80%', maxHeight: '300px', objectFit: 'cover' }} />
          )}
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="body1" style={labelStyle}>
            Path:
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
