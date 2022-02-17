import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password, email } = request.body;
    const image = request;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      username,
      password,
      email,
      image_name: image.file?.originalname,
    });

    return response.status(result.status).json(result.value);
  }
}
