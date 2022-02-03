import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginValidator, registerValidator } from '../../utils/validator';

const createToken = (user, secret) => {
  const { username, _id } = user;
  return jwt.sign({ username, _id }, secret, {
    expiresIn: '5d',
  });
};

export default {
  Query: {
    getProfile: async (parent, args, { req, user }) => {
      return user;
    },
  },
  Mutation: {
    register: async (
      parent,
      { username, password, avatar },
      { User },
      info,
    ) => {
      const { errors, valid } = registerValidator(username, password);

      if (!valid) {
        throw new UserInputError(Object.values(errors)[0], { errors });
      }

      const existingUser = await User.findOne({
        username: { $regex: new RegExp('^' + username + '$', 'i') },
      });

      if (existingUser) {
        throw new UserInputError(`Username '${username}' is already taken.`);
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await new User({
          username,
          password: hashedPassword,
          avatar,
        });
        await newUser.save();
        return 'Registered Successfully. Please login.';
      } catch (err) {
        throw new Error(err.message);
      }
    },
    login: async (parent, { username, password }, { User }) => {
      const { errors, valid } = loginValidator(username, password);

      if (!valid) {
        throw new UserInputError(Object.values(errors[0], { errors }));
      }

      try {
        const user = await User.findOne({ username });
        if (!user) throw new UserInputError(`User: '${username}' not found.`);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          throw new UserInputError(
            'Either email or password is incorrect. Please verify',
          );
        const payload = {
          id: user._id,
          username: user.username,
        };
        const token = createToken(payload, process.env.JWT_SECRET);
        return { token };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
