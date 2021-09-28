import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUsersUseCase = new ListUsersUseCase();
      const userList = await listUsersUseCase.execute();
      return response.status(200).json(userList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListUsersController };
