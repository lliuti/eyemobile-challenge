import { Request, Response } from "express";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase";

class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listTransactionsUseCase = new ListTransactionsUseCase();
      const transactionList = await listTransactionsUseCase.execute();
      return response.status(200).json(transactionList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTransactionsController };
