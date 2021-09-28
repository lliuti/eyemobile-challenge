import { Request, Response } from "express";
import { UpdateProductImageUseCase } from "./UpdateProductImageUseCase";

class UpdateProductImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { productId } = request.params;
    const productImage = request.file.filename;

    try {
      const updateProductImageUseCase = new UpdateProductImageUseCase();
      await updateProductImageUseCase.execute({
        productId,
        image: productImage,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { UpdateProductImageController };
