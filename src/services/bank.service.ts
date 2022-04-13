import axios from 'axios';
import { IBankItem } from '../types/bank.type';

const apiUrl = 'http://localhost:3005';

export const getBanks = async () => {
  return await axios.get<IBankItem[]>(apiUrl + `/bank`);
};

export const getBank = async (id: number) => {
  return await axios.get<IBankItem>(apiUrl + `/bank/${id}`);
};
//
// export const addNewMovie = async (
//   user: User | null,
//   values: Movie,
//   resetForm: (nextState?: Partial<FormikState<Movie>> | undefined) => void
// ) => {
//   await axios.post<Movie>(apiUrl + `/films`, {
//     ...values,
//     author: user?.email,
//     rate: 0,
//   });
//   resetForm();
// };
//
// export const editMovie = async (id: number, values: Movie, user: User | null) => {
//   return await axios.put<Movie>(apiUrl + `/films/${id}`, {
//     ...values,
//     author: user?.email,
//   });
// };
//
export const deleteBank = async (id: number) => {
  return await axios.delete(apiUrl + `/bank/${id}`);
};
