export default class User {
  constructor(readonly name: string) {}

  receive(data: { from: string; message: string }): void {
    console.log(
      `[${this.name}] - A aplicação ${data.from} envio a seguinte notificação: ${data.message}`
    );
  }
}
