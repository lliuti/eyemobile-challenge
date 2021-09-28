import { getCustomRepository } from "typeorm";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { ProductRepository } from "../../repositories/ProductRepository";
import { UserRepository } from "../../repositories/UserRepository";

class CreateProductUseCase {
  async execute({
    registered_by,
    name,
    price,
    amount = 1,
  }: ICreateProductDTO): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);
    const userRepository = getCustomRepository(UserRepository);

    const existingProduct = await productRepository.findOne({ name });
    const user = await userRepository.findOne({ where: { id: registered_by } });

    if (!user) {
      throw new Error("User not found.");
    }

    // If there is already a Product with the same name, increment "amount"
    if (existingProduct) {
      existingProduct.amount += 1;
      await productRepository.save(existingProduct);
    } else {
      const product = productRepository.create({
        registered_by: user,
        name,
        price,
        amount,
      });

      await productRepository.save(product);
    }
  }
}

export { CreateProductUseCase };
