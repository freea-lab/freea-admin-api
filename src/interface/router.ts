import * as express from 'express';

interface IRouter {
  router: express.Router;
  path: string;

  route(): void;
}

export default IRouter;
