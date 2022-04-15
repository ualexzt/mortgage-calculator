import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface TableProps {
  calc: number;
  downPay: number;
  rate: number;
}

const TableContent = ({ calc, downPay, rate }: TableProps) => {
  const rows = [
    { id: 1, name: 'Loan amount', value: calc, prefix: '$' },
    { id: 2, name: 'Down payment', value: downPay, prefix: '$' },
    { id: 3, name: 'Commission costs', value: rate, prefix: '%' },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Calculation results</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.value}
                  {row.prefix}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContent;
