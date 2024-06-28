export default class BankAccount {
  constructor(readonly accountNumber: string, private balance: number) {}

  static create(accountNumber: string, balance: number) {
    return new BankAccount(accountNumber, balance);
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  debit(amount: number): void {
    if (this.balance < amount) throw new Error("Insufficient account balance");
    this.balance -= amount;
  }

  credit(amount: number): void {
    this.balance += amount;
  }
}
