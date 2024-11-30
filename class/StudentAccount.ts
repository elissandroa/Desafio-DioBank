import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber );
    }

    deposit = (value: number) : number =>  {
        let balance: number = this.getBalance();
        this.setBalance(balance + value + 10);
        return this.getBalance();
    };
}