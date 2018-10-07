import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  login: {
    type: String,
  },
  password: {
    type: String,
  },
});
