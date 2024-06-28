export interface Usecase {
  execute(): void;
}

export class ShowUseCase {
  execute(): void {
    console.log("Recebendo chamada do observer");
  }
}
