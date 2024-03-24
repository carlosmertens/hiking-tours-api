import {Router} from 'express';
import {controllers} from '../controllers/users';
import {validateParam} from '../middlewares/validateParam';

export const usersRouter = Router();

usersRouter.param('id', validateParam);

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
