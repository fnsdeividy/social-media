
interface IPostUseCase {
  test: string
}


export class PostUseCase {
  async execute({ test }: IPostUseCase) {
    
    
    return test
    
  }
}