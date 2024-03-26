import {Router} from 'express';
import {asyncWrapper} from '../middlewares/asyncWrapper';
import {controllers} from '../controllers/users';
// import {validateParam} from '../middlewares/validateParam';

export const usersRouter = Router();

// usersRouter.param('id', validateParam);

usersRouter
  .route('/')
  .get(asyncWrapper(controllers.getAllUsers))
  .post(asyncWrapper(controllers.createNewUser));

usersRouter
  .route('/:id')
  .get(asyncWrapper(controllers.getUser))
  .put(asyncWrapper(controllers.updateUser))
  .patch(asyncWrapper(controllers.patchUser))
  .delete(asyncWrapper(controllers.deleteUser));
