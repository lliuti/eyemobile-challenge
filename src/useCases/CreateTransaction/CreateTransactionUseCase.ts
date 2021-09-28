import { getCustomRepository } from "typeorm";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { TransactionRepository } from "../../repositories/TransactionRepository";
import { getTransactionTotalPrice } from "../../utils/getTransactionTotalPrice";
import { subtractProductAmount } from "../../utils/subtractProductAmount";

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
