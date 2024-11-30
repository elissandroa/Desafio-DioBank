import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const studentAccount: StudentAccount = new StudentAccount('Elissandro', 15);


console.log(peopleAccount);
console.log(companyAccount);
console.log(studentAccount);

console.log("PeopleAccount deposito de 100");
peopleAccount.deposit(100)
console.log("PeopleAccount saldo:",peopleAccount.getBalance());
console.log("PeopleAccount deposito de 220");
peopleAccount.deposit(220)
console.log("PeopleAccount saldo:",peopleAccount.getBalance());
console.log("PeopleAccount saque de 50");
peopleAccount.withdraw(50);
console.log("PeopleAccount saldo:",peopleAccount.getBalance());
console.log("PeopleAccount saque de 1000");
peopleAccount.withdraw(1000);
console.log("PeopleAccount saldo:",peopleAccount.getBalance());


console.log("CompanyAccount deposito de 100");
companyAccount.deposit(100)
console.log("CompanyAccount saldo:", companyAccount.getBalance());
console.log("CompanyAccount deposito de 220");
companyAccount.deposit(220)
console.log("CompanyAccount saldo:", companyAccount.getBalance());


console.log("CompanyAccount Emprestimo de 100");
companyAccount.getLoan(100);
console.log("CompanyAccount saldo:", companyAccount.getBalance());

console.log("CompanyAccount saque de 50");
companyAccount.withdraw(50);
console.log("CompanyAccount saldo:",companyAccount.getBalance());
console.log("CompanyAccount saque de 1000");
companyAccount.withdraw(1000);
console.log("CompanyAccount saldo:",companyAccount.getBalance());


console.log("StudentAccount deposito de 100");
studentAccount.deposit(100)
console.log("StudentAccount saldo:",studentAccount.getBalance());
console.log("StudentAccount deposito de 220");
studentAccount.deposit(220)
console.log("StudentAccount saldo:",studentAccount.getBalance());
console.log("StudentAccount saque de 50");
studentAccount.withdraw(50);
console.log("StudentAccount saldo:",studentAccount.getBalance());
console.log("StudentAccount saque de 1000");
studentAccount.withdraw(1000);
console.log("StudentAccount saldo:",studentAccount.getBalance());
