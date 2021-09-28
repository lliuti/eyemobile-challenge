import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const authenticateUserUseCase = new AuthenticateUserUseCase();
      const token = await authenticateUserUseCase.execute({ email, password });
      return response.status(201).json(token);
    } catch (err) {
      return response.status(401).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
