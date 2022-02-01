import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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

const User = model('User', userSchema);

export default User;
