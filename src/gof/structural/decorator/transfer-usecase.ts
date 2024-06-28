import TransferService from "./transfer-service";
import Usecase from "./usecase";

export default class Transfer implements Usecase {
  constructor(private bankService: TransferService) {}

  async execute(input: any): Promise<void> {
    this.bankService.transferAmount(
      input.account_1,
      input.account_2,
      input.amount
    );
  }
}
