import { ConcreteAggregate } from "./aggregate";

export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class ConcreteIterator<T> implements Iterator<T> {
  private aggregate: ConcreteAggregate<T>;
  private current: number = 0;

  constructor(aggregate: ConcreteAggregate<T>) {
    this.aggregate = aggregate;
  }

  next(): T {
    return this.aggregate.get(this.current++);
  }

  hasNext(): boolean {
    this.current++;
    return this.current < this.aggregate.count();
  }
}
