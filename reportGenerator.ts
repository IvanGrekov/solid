import { getCurrentMonth, getMonthName, getCurrentYear } from './utils/date.utils';
import { filterTransactionsByMonth, getTransactionsByYear } from './utils/transactions.utils';
import { getIncomeFromTransactions } from './utils/income.utils';
import { ITransaction } from './types';

type TGetIncomeByMonth = (transactions: ITransaction[], month?: number) => string;
type TGetIncomeByYear = (transactions: ITransaction[], year?: number) => string;

export abstract class ReportGenerator {
    abstract getIncomeByMonth: TGetIncomeByMonth;
    abstract getIncomeByYear: TGetIncomeByYear;
}

export class AccountingReportGenerator extends ReportGenerator {
    getIncomeByMonth: TGetIncomeByMonth = (transactions, month = getCurrentMonth()) => {
        const monthName = getMonthName(month);
        const year = getCurrentYear();

        const transactionsByMonth = filterTransactionsByMonth(transactions, month);
        const income = getIncomeFromTransactions(transactionsByMonth);

        return `Accounting Report for ${monthName} ${year}: ${income}`;
    }

    getIncomeByYear: TGetIncomeByYear = (transactions, year = getCurrentYear()) => {
        const transactionsByYear = getTransactionsByYear(transactions, year);
        const income = getIncomeFromTransactions(transactionsByYear);

        return `Accounting Report for ${year} year: ${income}`;
    }
}
