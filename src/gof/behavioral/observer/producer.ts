import { Observer } from "./consumer";

export interface Observable {
  subscribe(...consumers: Observer[]): void;
  unsubscribe(consumer: Observer): void;
  notify(): void;
}

export class Producer implements Observable {
  private consumers: Observer[] = [];

  constructor() {}

  subscribe(...consumers: Observer[]): void {
    for (const consumer of consumers) {
      this.consumers.push(consumer);
    }
  }

  unsubscribe(consumer: Observer): void {
    const observerIndex = this.consumers.indexOf(consumer);

    if (observerIndex !== -1) {
      this.consumers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    for (const consumer of this.consumers) {
      consumer.execute();
    }
  }
}
