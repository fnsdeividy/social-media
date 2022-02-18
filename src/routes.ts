import { Router } from 'express';
import { CreatePostController } from './modules/post/useCases/CreatePost/CreatePostController'
import { CreateUserController } from './modules/users/useCases/createUser/CreateUserController'
import multer from 'multer';
import { uploadFile } from './config/upload'


const routes = Router()
const upload = multer(uploadFile)

const createPostController = new CreatePostController()
const createUserController = new CreateUserController()

routes.post('/post/create', createPostController.handle )

//Multipart Form
routes.post('/user/register',upload.single('image'), createUserController.handle )

export { routes }