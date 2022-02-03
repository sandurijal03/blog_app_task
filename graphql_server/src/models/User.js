import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import schemaCleaner from '../utils/schemaCleaner';

const userSchema = new Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'http://getdrawings.com/free-icon-bw/generic-avatar-icon-3.png',
  },
});

userSchema.plugin(uniqueValidator);
schemaCleaner(userSchema);

const User = model('User', userSchema);

export default User;
