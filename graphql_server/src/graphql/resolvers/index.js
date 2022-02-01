import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (user, secret) => {
  const { email, name } = user;
  return jwt.sign({ email, name }, secret, {
    expiresIn: '5d',
  });
};

const resolvers = {
  Query: {
    getProfile: async (parent, args, { req, user }) => {
      return user;
    },
  },
  Mutation: {
    register: async (
      parent,
      { name, email, password, avatar },
      { User },
      info,
    ) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await new User({
          name,
          email,
          password: hashedPassword,
          avatar,
        });
        const user = await newUser.save();
        const payload = {
          name: user.name,
          email: user.email,
        };
        const token = createToken(payload, process.env.JWT_SECRET);
        // return 'Registered successfully';
        return token;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    login: async (parent, { email, password }, { User }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Email not found. Please register.');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          throw new Error(
            'Either email or password is incorrect. Please verify',
          );
        const payload = {
          name: user.name,
          email: user.email,
        };
        const token = createToken(payload, process.env.JWT_SECRET);
        return token;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default resolvers;
