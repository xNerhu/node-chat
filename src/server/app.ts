import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';

import * as Routes from './routes';
import { config } from '@server/constants';
import './utils/passport';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.config();
    this.connectDb();
    this.attachRoutes();
  }

  private config() {
    this.app.use(helmet());
    this.app.use(cookieParser());
    this.app.use(
      session({ secret: 'key', saveUninitialized: true, resave: true }),
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static('views'));
    this.app.use(express.static('build'));

    this.app.set('view engine', 'ejs');
  }

  private connectDb() {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(config.mongo.url)
      .then(() => {
        console.log('Database connected!');
      })
      .catch(err => {
        console.log(err);
      });
  }

  private attachRoutes() {
    /*if (process.env.NODE_ENV === 'development') {
      Routes.dev(this.app);
    }

    Routes.user(this.app);
    Routes.content(this.app);
*/
    this.app.get('*', (req, res) => {
      return res.render('index');
    });
  }
}

export default new App().app;
