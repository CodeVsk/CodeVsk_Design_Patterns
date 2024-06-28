class BankService {
  transferAmount(
    accountFrom: BankAccount,
    accountTo: BankAccount,
    amount: number
  ): void {
    if (accountFrom.balance < amount)
      throw new Error("Insufficient account balance");

    accountFrom.balance -= amount;
    console.log(`Foi debitado ${amount} da conta ${accountFrom.accountNumber}`);

    accountTo.balance += amount;
    console.log(`Foi creditado ${amount} na conta ${accountTo.accountNumber}`);
  }
}

export class BankAccount {
  constructor(readonly accountNumber: string, public balance: number) {}
}

const account_1: BankAccount = new BankAccount("111-1", 500);
const account_2: BankAccount = new BankAccount("222-2", 500);

const bankService: BankService = new BankService();

bankService.transferAmount(account_1, account_2, 200);
