import NotificationInterface, {
  NotificationErrorProps,
} from "./notification.interface";

export default class Notification implements NotificationInterface {
  private errors: NotificationErrorProps[] = [];

  addError(error: NotificationErrorProps): void {
    this.errors.push(error);
  }
  hasErrors(): boolean {
    return this.errors.length > 0;
  }
  getErrors(): NotificationErrorProps[] {
    return this.errors;
  }
  messages(context?: string): string {
    let message: string = "";
    for (const error of this.errors) {
      if (context === undefined || error.context === context) {
        message += `${error.context}: ${error.message},`;
      }
    }
    return message;
  }
}
