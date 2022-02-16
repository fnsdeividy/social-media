import { Router } from 'express';
import { CreatePostController } from './modules/post/useCases/CreatePost/CreatePostController'
import { CreateUserController } from './modules/users/useCases/createUser/CreateUserController'

const routes = Router()

const createPostController = new CreatePostController()
const createUserController = new CreateUserController()

routes.post('/post/create', createPostController.handle )
routes.post('/user/register', createUserController.handle )

export { routes }