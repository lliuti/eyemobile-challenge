import { Request, Response } from "express";
import { GetTransactionPriceUseCase } from "./GetTransactionPriceUseCase";

class GetTransactionPriceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, amount } = request.body;

    try {
      const getTransactionPriceUseCase = new GetTransactionPriceUseCase();
      const transactionPrice = await getTransactionPriceUseCase.execute({
        name,
        amount,
      });
      return response.status(200).json(transactionPrice);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetTransactionPriceController };
