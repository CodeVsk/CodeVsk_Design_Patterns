import { ConcreteAggregate } from "./aggregate";
import Product from "./product";

test("Devo criar uma lista com 4 produtos e percorrer a mesma usando iterator", () => {
  const aggregate: ConcreteAggregate<Product> =
    new ConcreteAggregate<Product>();

  aggregate.add(new Product(crypto.randomUUID(), "Escapamento", 300));
  aggregate.add(new Product(crypto.randomUUID(), "Escapamento", 300));
  aggregate.add(new Product(crypto.randomUUID(), "Escapamento", 300));
  aggregate.add(new Product(crypto.randomUUID(), "Escapamento", 300));

  const iterator = aggregate.createIterator();

  while (iterator.hasNext()) {
    const product = iterator.next();

    console.log(`${product.name} - ${product.price}`);
  }

  expect(null).toBe(null);
});
