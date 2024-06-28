import NotificationInterface from "./notification.interface";
import Notification from "./notification";
import NotificationError from "./notification.error";

export default class Product {
  private notification: NotificationInterface;

  constructor(readonly name: string, readonly price: number) {
    this.notification = new Notification();
    this.validate();
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  validate(): void {
    if (!this.name) {
      this.notification.addError({
        context: "Product",
        message: "Name is required",
      });
    }
    if (!this.price) {
      this.notification.addError({
        context: "Product",
        message: "Price is required",
      });
    }
  }
}
