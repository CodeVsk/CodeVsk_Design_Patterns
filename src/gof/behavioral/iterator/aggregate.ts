import { ConcreteIterator, Iterator } from "./iterator";

export default interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

export class ConcreteAggregate<T> implements Aggregate<T> {
  private items: T[] = [];

  createIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this);
  }

  get(index: number): T {
    return this.items[index];
  }

  count(): number {
    return this.items.length;
  }

  add(item: T): void {
    this.items.push(item);
  }
}
