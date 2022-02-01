require('dotenv').config();

import jwt from 'jsonwebtoken';
import User from '../models/User';

module.exports = async (req, res, next) => {
  const authHeader = req.get('authorization');

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  let authUser = await User.findOne({
    email: decodedToken.email,
  }).select('-password');

  if (!authUser) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.user = authUser;
  next();
};
