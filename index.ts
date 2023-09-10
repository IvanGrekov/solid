import { AccountingDepartment } from './accountingDepartment';

const accountingDepartment = new AccountingDepartment();

console.log(accountingDepartment.getReportByMonth(7));
console.log(accountingDepartment.getReportByYear());
