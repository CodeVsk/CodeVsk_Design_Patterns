import { LogProductProxy, ProductDAO, ProductService } from "./proxy";

test("Deve procurar um produto pelo nome.", () => {
  const productDAO: ProductDAO = new LogProductProxy();

  const productService = new ProductService(productDAO);

  const product = productService.findByName("Mouse");

  expect(product?.name).toBe("Mouse");
});
