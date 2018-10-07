import { Application } from 'express';

import { UserModel } from '../models/user';

export const dev = (app: Application) => {
  app.get('/dev/get-users', (req, res) => {
    UserModel.find({}, (err, items) => {
      res.json(items);
    });
  });

  app.get('/dev/delete-users', (req, res) => {
    UserModel.remove({}, err => {
      res.json(err);
    });
  });

  app.get('/dev/add-user', (req, res) => {
    UserModel.findOne({ username: 'root' }, (err, doc) => {
      if (!doc) {
        const user = new UserModel({
          username: 'root',
          password: '123',
        });

        user.save({}, (err, item) => {
          res.json(item);
        });
      } else {
        res.json(doc);
      }
    });
  });
};
