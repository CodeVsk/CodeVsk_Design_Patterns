import BankAccount from "./bank-account";

export default class TransferService {
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
