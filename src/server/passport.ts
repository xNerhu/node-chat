import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import UserController from './controllers/user';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      // console.log(username, password);

      const user = await UserController.getByLogin(username);

      if (user != null) {
        return done(false, user, { message: 'success' });
      }

      return done(true, false, { message: 'incorrect_password' });
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
