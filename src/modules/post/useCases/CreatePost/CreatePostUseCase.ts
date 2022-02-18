
interface IPostUseCase {
  test: string
}


export class CreatePostUseCase {
  async execute({ test }: IPostUseCase) {
    
    
    return test
    
  }
}