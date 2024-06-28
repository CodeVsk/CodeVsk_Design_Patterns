import Mediator from "./mediator";
import User from "./user";

export default class Notify {
  constructor(readonly mediator: Mediator) {}

  send(from: string, message: string): void {
    this.mediator.send("notification", { from: from, message });
  }

  addRecipients(user: User): void {
    this.mediator.register(
      "notification",
      (data: { from: string; message: string }) => {
        user.receive(data);
      }
    );
  }
}
