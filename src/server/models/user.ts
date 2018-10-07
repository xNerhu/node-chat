import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const UserModel = mongoose.model('User', schema);
