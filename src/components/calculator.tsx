import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { calculate, getBanks } from '../services/bank.service';
import { IBankItem } from '../types/bank.type';
import { useFormik } from 'formik';
import TableContent from './tableContent';

interface Calc {
  initLoan: number;
  downPay: number;
}

const Calculator = () => {
  const [selectBanks, setSelectBanks] = useState<IBankItem[]>([]);
  const [selBank, setSelBank] = useState<IBankItem>({} as IBankItem);
  const [value, setValue] = useState('');
  const [calc, setCalc] = useState(0);
  const [downPay, setDownPay] = useState(0);

  useEffect(() => {
    getBanks().then((res) => {
      setSelectBanks(res.data);
    });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    const bank = selectBanks.filter((item) => item.id === Number(event.target.value));
    setSelBank(bank[0]);
  };

  const selectBankForm = useFormik<Calc>({
    initialValues: {
      initLoan: 0,
      downPay: 0,
    },
    onSubmit: (values) => {
      const calc = Number(
        calculate(values.initLoan, values.downPay, selBank.rate, selBank.loanTerm)
      );
      setCalc(calc);
      setDownPay(values.downPay);
    },
  });
  return (
    <Paper sx={{ my: 2, p: 2, mx: 'auto', maxWidth: 'lg', flexGrow: 1 }}>
      <Typography variant="h4" align={'center'}>
        Mortgage calculator
      </Typography>

      <form onSubmit={selectBankForm.handleSubmit}>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="init-loan">Initial loan</InputLabel>
              <OutlinedInput
                id="init-loan"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                type="number"
                label="Initial loan"
                {...selectBankForm.getFieldProps('initLoan')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="down-pay">Down payment</InputLabel>
              <OutlinedInput
                type="number"
                id="down-pay"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Down payment"
                {...selectBankForm.getFieldProps('downPay')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Select bank</InputLabel>
              <Select
                labelId="select-label"
                id="demo-simple-select"
                label="Select bank"
                value={value}
                onChange={handleChange}
              >
                {selectBanks.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Apply
        </Button>
      </form>
      <TableContent calc={calc} downPay={downPay} rate={selBank.rate} />
    </Paper>
  );
};

export default Calculator;
