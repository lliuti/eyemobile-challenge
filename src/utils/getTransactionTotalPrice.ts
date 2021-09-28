import { getCustomRepository } from "typeorm";
import { IGetTransactionPriceDTO } from "../dtos/IGetTransactionPriceDTO";
import { ProductRepository } from "../repositories/ProductRepository";

const getTransactionTotalPrice = async ({
  name,
  amount,
}: IGetTransactionPriceDTO): Promise<number> => {
  const productRepository = getCustomRepository(ProductRepository);
  const product = await productRepository.findOne({
    where: {
      name,
    },
  });

  const availableAmount = product.amount;

  if (availableAmount < amount) {
    throw new Error("Out of stock");
  }

  const totalPrice = product.price * amount;

  return totalPrice;
};

export { getTransactionTotalPrice };
