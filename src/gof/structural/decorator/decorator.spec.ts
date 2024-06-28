import Transfer from "./transfer-usecase";
import TransferService from "./transfer-service";
import BankAccount from "./bank-account";
import LogDecorator from "./log-decorator";

test("Devo registrar um log ao realizar uma transferencia", async () => {
  const account_1: BankAccount = new BankAccount("111-1", 500);
  const account_2: BankAccount = new BankAccount("222-2", 500);
  const transferService: TransferService = new TransferService();
  const transferUsecase = new Transfer(transferService);
  const logDecorator = new LogDecorator(transferUsecase);

  await logDecorator.execute({
    account_1: account_1,
    account_2: account_2,
    amount: 200,
  });
});
