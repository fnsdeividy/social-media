import { Request, Response } from 'express';

import { PostUseCase } from './PostUseCase'


export class PostController {
  async handle(request: Request, response: Response) {
    const { test } = request.body;

    const postUseCase = new PostUseCase();

    const result = await postUseCase.execute({
      test
    });

    return response.json(result);
  }
}