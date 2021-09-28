import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductRepository } from "../../repositories/ProductRepository";

class ListProductsUseCase {
  async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);
    const productList = await productRepository.find();
    return productList;
  }
}

export { ListProductsUseCase };
