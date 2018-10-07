import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { UserModel } from '@server/models/user';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, cb) => {
      username = username.toLowerCase();

      UserModel.findOne({ username }, (err, user: any) => {
        if (err) {
          cb(err);
        } else if (!user) {
          cb(null, false, { message: 'incorrect_username' });
        } else if (user.password !== password) {
          cb(null, false, { message: 'incorrect_password' });
        } else {
          cb(null, user);
        }
      });
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
