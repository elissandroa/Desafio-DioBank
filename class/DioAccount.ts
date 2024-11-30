export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (value: number): number => {
    this.balance += value
    return value;
  }

  withdraw = (value: number): string => {
    if (this.validateStatus()) {
      if (value <= this.balance) {
        this.balance -= value;
      } else {
        console.log("Saldo insuficiente!");
        return "Saldo insuficiente!";
      }
      console.log("Saque efetuado com sucesso!");
      return ("Saque Efetuado com sucesso!")

    } else {
      console.log("Esta conta não está ativa!");
      return "Esta conta não está ativa";
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  private validateStatus = (): boolean => {
    return this.status;
  }

  getValidateStatus = (): boolean => {
    return this.validateStatus();
  }
}
