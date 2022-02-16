import mongoose from 'mongoose';
import mongoConnection from '../../../database/connection';

const User = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date,
  },
  { collection: 'user', typeKey: '$type', versionKey: false, minimize: false }
);

const users = mongoConnection.model('user', User);

export { users };
