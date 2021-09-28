import { getCustomRepository } from "typeorm";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ProductRepository } from "../../repositories/ProductRepository";
import { TransactionRepository } from "../../repositories/TransactionRepository";
import { getTransactionTotalPrice } from "../../services/getTransactionTotalPrice";
import { subtractProductAmount } from "../../services/subtractProductAmount";

class CreateTransactionUseCase {
  async execute({
    name,
    user,
    amount,
    observation,
  }: ICreateTransactionDTO): Promise<void> {
    const total_price = await getTransactionTotalPrice({ name, amount });

    const transactionRepository = getCustomRepository(TransactionRepository);

    const transaction = transactionRepository.create({
      product: name,
      buyer: user,
      amount,
      observation,
      total_price,
    });

    await transactionRepository.save(transaction);

    await subtractProductAmount({ name, amount });
  }
}

export { CreateTransactionUseCase };
