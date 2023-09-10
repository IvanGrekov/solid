import { ITransaction } from '../types';

export const getIncomeFromTransactions = (transactions: ITransaction[]): number => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
}
