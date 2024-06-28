import BankAccount from "./bank-account";
import TransferCommand from "./transfer-command";

test("Devo realizar uma transferência", () => {
  const account_1: BankAccount = BankAccount.create("111-1", 500);
  const account_2: BankAccount = BankAccount.create("222-2", 500);

  const transferCommand: TransferCommand = new TransferCommand(
    account_1,
    account_2,
    120
  );
  transferCommand.execute();

  expect(account_1.getBalance()).toBe(380);
  expect(account_2.getBalance()).toBe(620);
});
