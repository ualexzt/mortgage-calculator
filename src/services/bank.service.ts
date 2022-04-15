import axios from 'axios';
import { IBankItem } from '../types/bank.type';
import { FormikState } from 'formik';

const apiUrl = 'http://localhost:3005';

export const getBanks = async () => {
  return await axios.get<IBankItem[]>(apiUrl + `/bank`);
};

export const getBank = async (id: number) => {
  return await axios.get<IBankItem>(apiUrl + `/bank/${id}`);
};

export const addNewBank = async (
  values: IBankItem,
  resetForm: (nextState?: Partial<FormikState<IBankItem>> | undefined) => void
) => {
  await axios.post<IBankItem>(apiUrl + `/bank`, {
    ...values,
  });
  resetForm();
};

export const editBank = async (id: number, values: IBankItem) => {
  return await axios.put<IBankItem>(apiUrl + `/bank/${id}`, {
    ...values,
  });
};

export const deleteBank = async (id: number) => {
  return await axios.delete(apiUrl + `/bank/${id}`);
};

export const calculate = (price: number, pay: number, percent: number, month: number) => {
  const i = percent / 100 / 12;
  const r = (price - pay) * ((i * Math.pow(1 + i, month)) / (Math.pow(1 + i, month) - 1));
  return r.toFixed(2);
};
