import { Usecase } from "./usecase";

export interface Observer {
  execute(...args: unknown[]): void;
}

export class Consumer implements Observer {
  constructor(public usecase: Usecase) {}

  execute(): void {
    this.usecase.execute();
  }
}
