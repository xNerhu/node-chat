import { Application } from 'express';

export const content = (app: Application) => {
  app.get('/', (req, res, next) => {
    if (req.isUnauthenticated()) {
      return res.redirect('/login');
    }

    res.render('index');
  });
};
