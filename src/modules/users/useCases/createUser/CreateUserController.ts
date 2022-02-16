import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password, email} = request.body;
    const image = request

    if (!username || !password || !email) {
      return response.status(400).json({ ok: false, why: 'Missing data!' });
    }

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      username,
      password,
      email,
      image_name:image.file?.originalname
    });
    

    return response.json(result);
  }
}
