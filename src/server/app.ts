import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import { getConnectionURL } from '@/utils/server';

import UserController from './controllers/user';
import './passport';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.config();
    this.connectDb();
    this.routes();
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
      .connect(getConnectionURL())
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch(err => {
        console.log(err);
      });
  }

  private routes() {
    this.app.get('/', (req, res, next) => {
      if (!req.isAuthenticated()) {
        return res.redirect('/login');
      } else {
        next();
      }
    });

    this.app.post('/api/login', (req, res, next) => {
      passport.authenticate('local', (err, user, info) => {
        if (err) return next();

        req.login(user, err => {
          console.log('logged');
          return res.json({ success: true });
        });
      })(req, res, next);
    });

    this.app.get('*', (req, res) => {
      return res.render('index');
    });
  }
}

export default new App().app;
