import * as mongoose from 'mongoose';

import { UserSchema } from '../models/user';

const User = mongoose.model('User', UserSchema);

class UserController {
  public add() {
    new Promise((resolve: (data: any) => void, reject) => {
      const user = new User({
        login: 'abc',
        password: '123',
      });

      user.save();
    });
  }

  public get() {
    return new Promise((resolve: (data: any) => void, reject) => {
      User.find({}, (err, user) => {
        console.log(typeof user);

        resolve(user);
      });
    });
  }

  public getByLogin(login: string) {
    return new Promise((resolve, reject) => {
      User.findOne({ login }, (err, item) => {
        if (err) reject(err);

        resolve(item);
      });
    });
  }
}

export default new UserController();
