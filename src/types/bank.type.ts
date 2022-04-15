export interface IBankItem {
  id?: number;
  name?: string;
  description?: string;
  rate: number;
  maxLoan: number;
  minPayment: number;
  loanTerm: number;
}
