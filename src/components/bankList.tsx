import React, { useEffect, useState } from 'react';
import { IBankItem } from '../types/bank.type';
import { getBanks } from '../services/bank.service';
import BankItem from './bankItem';

const BankList = () => {
  const [banks, setBanks] = useState<IBankItem[]>([]);

  useEffect(() => {
    getBanks().then((res) => {
      setBanks(res.data);
    });
  }, []);
  return (
    <>
      {banks.map((bank) => (
        <BankItem key={bank.id} bank={bank} />
      ))}
    </>
  );
};

export default BankList;
