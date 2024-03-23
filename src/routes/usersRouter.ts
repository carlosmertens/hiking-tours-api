import {Router} from 'express';
import {controllers} from '../controllers/users';

export const usersRouter = Router();

usersRouter
  .route('/')
  .get(controllers.getAllUsers)
  .post(controllers.createNewUser);

usersRouter
  .route('/:id')
  .get(controllers.getUser)
  .put(controllers.updateUser)
  .patch(controllers.patchUser)
  .delete(controllers.deleteUser);
