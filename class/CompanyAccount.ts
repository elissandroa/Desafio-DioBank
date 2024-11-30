import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): number => {
    if (this.getValidateStatus()) {
      let balance: number = this.getBalance();
      this.setBalance(balance += value);
    }
    return this.getBalance()
  }

}
