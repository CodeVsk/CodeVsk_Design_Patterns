export class Product {
  constructor(readonly name: string, readonly price: number) {}
}

export class ProductDAO {
  private products: Product[] = [
    new Product("Pendrive", 100),
    new Product("Mouse", 100),
    new Product("Headset", 100),
  ];

  constructor() {}

  find(name: string): Product | undefined {
    return this.products.find((product) => product.name == name);
  }
}

export class ProductService {
  private productDAO: ProductDAO;

  constructor(productDAO: ProductDAO) {
    this.productDAO = productDAO;
  }

  findByName(name: string): Product | undefined {
    return this.productDAO.find(name);
  }
}

export class LogProductProxy extends ProductDAO {
  find(name: string): Product | undefined {
    console.log("Buscou um produto:", name);
    return super.find(name);
  }
}
