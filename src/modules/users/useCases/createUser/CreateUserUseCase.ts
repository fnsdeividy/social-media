import { hash } from 'bcrypt'
import { users } from '../../model/UserModel'


interface ICreateUser {
  username: string;
  password: string;
  email: string;
  image_name:string | undefined;
}

export class CreateUserUseCase {
  async execute({ username, email, password, image_name }: ICreateUser) {
   //check if data already exists 
   const checkIfEmailAlreadyExists = await users.findOne({ email });
   const checkIfUsernameAlreadyExists = await users.findOne({ username });

   if (checkIfEmailAlreadyExists) {
     return 'Email already Exists';
   }
   if (checkIfUsernameAlreadyExists) {
     return 'Username already';
   }

   //encrypt password
   const hashPassword = await hash(password, 8);

   //insert on database
   await users.insertMany({
     username,
     email,
     password: hashPassword,
     image_name,
     created_at: Date.now().toString(),
   });

   //return without password
   const view = {
     ok: true,
     username,
     email,
   };

   return view;
    
  }
}
