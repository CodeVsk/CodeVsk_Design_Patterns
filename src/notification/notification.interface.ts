export type NotificationErrorProps = {
  context: string;
  message: string;
};

export default interface NotificationInterface {
  addError(error: NotificationErrorProps): void;
  hasErrors(): boolean;
  getErrors(): NotificationErrorProps[];
  messages(context?: string): string;
}
