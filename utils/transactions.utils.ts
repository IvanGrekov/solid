import { ITransaction } from '../types';

type TFilterTransactionsByMonth = (transactions: ITransaction[], month: number) => ITransaction[];

export const filterTransactionsByMonth: TFilterTransactionsByMonth = (
    transactions,
    month,
) => {
    return transactions.filter(transaction => transaction.date.getMonth() === month);
};

type TGetTransactionsByYear = (transactions: ITransaction[], year: number) => ITransaction[];

export const getTransactionsByYear: TGetTransactionsByYear = (
    transactions,
    year,
) => {
    return transactions.filter(transaction => transaction.date.getFullYear() === year);
}
