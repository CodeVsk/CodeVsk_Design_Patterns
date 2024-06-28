//Domain service
class TransferService {
  transfer(
    accountFrom: BankAccount,
    accountTo: BankAccount,
    amount: number
  ): void {
    accountFrom.debit(amount);
    console.log(
      `Foi debitado ${amount} da conta ${accountFrom.getAccountNumber()}`
    );

    accountTo.credit(amount);
    console.log(
      `Foi creditado ${amount} na conta ${accountTo.getAccountNumber()}`
    );
  }
}

// Account entity
export class BankAccount {
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

//Create class
const account_1: BankAccount = BankAccount.create("111-1", 500);
const account_2: BankAccount = BankAccount.create("222-2", 500);

//Create service
const transferService: TransferService = new TransferService();

//Execute transfer
transferService.transfer(account_1, account_2, 200);
