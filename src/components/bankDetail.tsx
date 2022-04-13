import { Box, Button, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BankDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Paper sx={{ my: 2, p: 2, mx: 'auto', maxWidth: 'lg', flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia component="img" height="240" image="" alt="Bank image" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Bonk name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Description: Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bank rate: bank rate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Interest rate: Interest rate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maximum loan: Maximum loan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Minimum down payment: Minimum down payment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Loan term: Loan term
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex' }}>
                  <Button variant="outlined" sx={{ mr: 1 }} onClick={() => navigate(-1)}>
                    Go Back
                  </Button>
                  <Button variant="outlined" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button variant="outlined">Remove</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default BankDetail;
