import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, amount, observation } = request.body;
    try {
      const createTransactionUseCase = new CreateTransactionUseCase();
      await createTransactionUseCase.execute({
        name,
        user: request.user_id,
        amount,
        observation,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTransactionController };
