import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";

const subtractProductAmount = async ({ name, amount }): Promise<void> => {
  // Subtracts the available products amount from transaction amount
  const productRepository = getCustomRepository(ProductRepository);

  const product = await productRepository.findOne({ name });

  product.amount -= amount;

  await productRepository.save(product);
};

export { subtractProductAmount };
