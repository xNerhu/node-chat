import { Application } from 'express';
import passport from 'passport';

export const user = (app: Application) => {
  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);

      if (!user) {
        return res.status(401).json({ success: false, ...info });
      }

      req.login(user, err => {
        if (err) return next(err);

        return res.status(200).json({
          success: true,
          redirectUrl: '/',
        });
      });
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });
};
