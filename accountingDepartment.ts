import { ITransaction } from './types';
import { transactions } from './constants';
import { ReportGenerator, AccountingReportGenerator } from './reportGenerator';

export class AccountingDepartment {
    protected transactions: ITransaction[] = [];
    protected reportGenerator: ReportGenerator;

    constructor() {
        this.reportGenerator = new AccountingReportGenerator();
        this.transactions = transactions;
    }

    public getReportByMonth(month?: number): string {
        return this.reportGenerator.getIncomeByMonth(this.transactions, month);
    }

    public getReportByYear(year?: number): string {
        return this.reportGenerator.getIncomeByYear(this.transactions, year);
    }
}
