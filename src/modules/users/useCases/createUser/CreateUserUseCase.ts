
interface ICreateUser {
  username: string;
  password: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ username, email, password }: ICreateUser) {
    
    //verificar se existe no Banco
   

    //hashear a senha

    //inserir no banco
    

    //retornar sem a senha por segurança
    
  }
}
