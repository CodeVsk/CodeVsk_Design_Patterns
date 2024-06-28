import Product from "./product";

test("Devo criar um produto sem passar nenhum parametro", () => {
  expect(() => {
    new Product("", 0);
  }).toThrow("Product: Name is required");
});
