import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IBankItem } from '../types/bank.type';
import { deleteBank, getBank } from '../services/bank.service';

const BankDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [bank, setBank] = useState<IBankItem>({} as IBankItem);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBank(Number(params.id)).then((res) => {
      setBank(res.data);
    });
  }, [params.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteBank(Number(params.id)).then(() => navigate('/'));
  };
  return (
    <>
      <Paper sx={{ my: 2, p: 2, mx: 'auto', maxWidth: 'lg', flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              height="240"
              image="https://worldscholarshipforum.com/wealth/wp-content/uploads/sites/4/2021/09/How-Do-banks-Make-Money.jpg"
              alt="Bank image"
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {bank.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Description: {bank.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Interest rate: {bank.rate}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maximum loan: ${bank.maxLoan}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Minimum down payment: {bank.minPayment}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Loan term: {bank.loanTerm} month
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex' }}>
                  <Button variant="outlined" sx={{ mr: 1 }} onClick={() => navigate('/')}>
                    Go Back
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ mr: 1 }}
                    onClick={() => navigate(`/bank/edit/${bank.id}`)}
                  >
                    Edit
                  </Button>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete bank'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the bank?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BankDetail;
