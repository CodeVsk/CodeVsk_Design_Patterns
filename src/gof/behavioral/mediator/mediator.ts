export default class Mediator {
  handlers: { event: string; callback: Function }[];

  constructor() {
    this.handlers = [];
  }

  register(event: string, callback: Function): void {
    this.handlers.push({ event, callback });
  }

  async send(event: string, data: any): Promise<void> {
    for (const handler of this.handlers) {
      if (handler.event == event) {
        await handler.callback(data);
      }
    }
  }
}
