import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as compression from 'compression';

import UserRouter from './routes/user';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.config();

    this.routes();
  }

  private routes(): void {
    const userRouter = new UserRouter();

    const router = express.Router();

    router.use(userRouter.path, userRouter.router);

    this.app.use('/api', router);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(cors());

    this.app.use(morgan('dev'));

    this.app.use(compression());

    this.app.set('port', process.env.PORT || 3000);
  }
}

export default new App().app;
