import { IGetTransactionPriceDTO } from "../../dtos/IGetTransactionPriceDTO";
import { getTransactionTotalPrice } from "../../services/getTransactionTotalPrice";

class GetTransactionPriceUseCase {
  async execute({ name, amount }: IGetTransactionPriceDTO): Promise<number> {
    if (amount < 1) {
      throw new Error("Invalid amount");
    }

    const totalPrice = await getTransactionTotalPrice({ name, amount });

    return totalPrice;
  }
}

export { GetTransactionPriceUseCase };
