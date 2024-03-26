import {Router} from 'express';
import {asyncRequest} from '../middlewares/asyncRequest';
import {controllers} from '../controllers/users';
import {validateParam} from '../middlewares/validateParam';

export const usersRouter = Router();

usersRouter.param('id', validateParam);

usersRouter
  .route('/')
  .get(asyncRequest(controllers.getAllUsers))
  .post(asyncRequest(controllers.createNewUser));

usersRouter
  .route('/:id')
  .get(asyncRequest(controllers.getUser))
  .put(asyncRequest(controllers.updateUser))
  .patch(asyncRequest(controllers.patchUser))
  .delete(asyncRequest(controllers.deleteUser));
