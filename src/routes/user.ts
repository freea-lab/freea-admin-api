import { Request, Response, Router } from 'express';
import IRouter from '../interface/router';
import UserController from '../controllers/user';

class UserRouter implements IRouter {
  router = Router();
  path = '/user';

  private userController: UserController = new UserController();

  constructor() {
    this.route();
  }

  route(): void {
    this.router.get('/', this.userController.getUser);
  }
}

export default UserRouter;
