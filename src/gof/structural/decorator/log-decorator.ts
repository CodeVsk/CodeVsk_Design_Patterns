import Usecase from "./usecase";

export default class LogDecorator implements Usecase {
  constructor(readonly usecase: Usecase) {}

  async execute(input: any): Promise<any> {
    console.log("Log de transferência:", input);
    return this.usecase.execute(input);
  }
}
