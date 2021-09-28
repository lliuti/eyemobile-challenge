import { getCustomRepository } from "typeorm";
import { IUpdateProductImageDTO } from "../../dtos/IUpdateProductImageDTO";
import { ProductRepository } from "../../repositories/ProductRepository";
import { deleteFile } from "../../utils/file";

class UpdateProductImageUseCase {
  async execute({ productId, image }: IUpdateProductImageDTO): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found!");
    }

    if (product.image) {
      await deleteFile(`./tmp/${product.image}`);
    }

    product.image = image;

    await productRepository.save(product);
  }
}

export { UpdateProductImageUseCase };
