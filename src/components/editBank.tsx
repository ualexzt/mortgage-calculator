import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { addNewBank, editBank, getBank } from '../services/bank.service';
import { IBankItem } from '../types/bank.type';

const EditBank = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    function detail() {
      getBank(Number(params.id)).then((res) => {
        editBankForm.setValues(res.data);
      });
    }

    if (params.id) detail();
  }, [params.id]);

  const editBankForm = useFormik<IBankItem>({
    initialValues: {
      name: '',
      description: '',
      rate: 0,
      maxLoan: 0,
      minPayment: 0,
      loanTerm: 0,
    },
    onSubmit: (values, { resetForm }) => {
      if (params.id) {
        editBank(Number(params.id), values).then(() => navigate(`/bank/${params.id}`));
      } else {
        addNewBank(values, resetForm).then(() => navigate(`/`));
      }
    },
  });
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add bank to catalog
          </Typography>

          <form onSubmit={editBankForm.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  required
                  fullWidth
                  label="Bank name"
                  autoFocus
                  inputProps={{ maxLength: 50 }}
                  {...editBankForm.getFieldProps('name')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="rate">Interest rate</InputLabel>
                  <OutlinedInput
                    id="rate"
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    type="number"
                    label="Interest rate"
                    {...editBankForm.getFieldProps('rate')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="loan-term">Loan term</InputLabel>
                  <OutlinedInput
                    type="number"
                    id="loan-term"
                    startAdornment={<InputAdornment position="start">M</InputAdornment>}
                    label="Loan term"
                    {...editBankForm.getFieldProps('loanTerm')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="max">Maximum loan</InputLabel>
                  <OutlinedInput
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    type="number"
                    id="max"
                    label="Maximum loan"
                    {...editBankForm.getFieldProps('maxLoan')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="mim">Minimum payment</InputLabel>
                  <OutlinedInput
                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                    type="number"
                    id="min"
                    label="Minimum payment"
                    {...editBankForm.getFieldProps('minPayment')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  label="Description"
                  inputProps={{ maxLength: 250 }}
                  {...editBankForm.getFieldProps('description')}
                />
              </Grid>
            </Grid>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Apply
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default EditBank;
