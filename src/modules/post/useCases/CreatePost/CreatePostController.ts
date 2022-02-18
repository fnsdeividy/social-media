import { Request, Response } from 'express';

import { CreatePostUseCase } from './CreatePostUseCase'


export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { test } = request.body;

    const createPostController = new CreatePostUseCase();

    const result = await createPostController.execute({
      test
    });

    return response.json(result);
  }
}