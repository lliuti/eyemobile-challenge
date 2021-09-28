import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price } = request.body;
    try {
      const createProductUseCase = new CreateProductUseCase();
      await createProductUseCase.execute({
        registered_by: request.user_id,
        name,
        price,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateProductController };
