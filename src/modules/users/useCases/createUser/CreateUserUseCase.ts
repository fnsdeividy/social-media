import { hash } from 'bcrypt';
import { users } from '../../model/UserModel';
import fs from 'fs';
import path from 'path';
import * as Yup from 'yup';

interface ICreateUser {
  username: string;
  password: string;
  email: string;
  image_name: string | undefined;
}

const tmpFolder = path.resolve(__dirname, '..', '..', '..', '..', '..', 'tmp');

export class CreateUserUseCase {
  async execute({ username, email, password, image_name }: ICreateUser) {
    //check if data already exists
    const checkIfEmailAlreadyExists = await users.findOne({ email });
    const checkIfUsernameAlreadyExists = await users.findOne({ username });

    if (checkIfEmailAlreadyExists) {
      throw new Error('Email already Exists');
    }
    if (checkIfUsernameAlreadyExists) {
      throw new Error('Username already');
    }

    //validate data
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('E-mail is required')
        .email('Invalid E-mail'),

      password: Yup.string().required('Password is required'),
    });
    const validateData = await schema.isValid(
      { email, password },
      {
        abortEarly: false,
      }
    );
    
   if( validateData === false) {
    fs.unlink(`${tmpFolder}/${image_name}`, (err) => {
      if (err) {throw err};
      return {
        value: {
          error: "Invalid data"
        },
        status: 400
      }
    })
   } else {

   }
   
      await schema.validate(
      { email, password },
      {
        abortEarly: false,
      }
    )
    

    

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
      value:{
        username,
        email,

      },
      status: 201
      
    };

    return view;
  }
}
