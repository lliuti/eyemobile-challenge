import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listProductsUseCase = new ListProductsUseCase();
      const productList = await listProductsUseCase.execute();
      return response.status(200).json(productList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListProductsController };
