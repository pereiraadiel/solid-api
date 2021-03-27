import { CreateUserUseCase } from "./CreateUserUseCase";
import { Response } from "express";
import { Request } from "express";
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Unexpected error!",
      });
    }
  }
}
