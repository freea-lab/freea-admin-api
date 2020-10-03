import { Request, Response } from 'express';

class UserController {
  getUser(req: Request, res: Response): void {
    res.status(200).json({
      message: 'test',
    });
  }
}

export default UserController;
