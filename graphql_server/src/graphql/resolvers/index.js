import bcrypt from 'bcryptjs';

const resolvers = {
  Query: {
    hello: () => 'Hello world',
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
        return user;
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
        return user;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default resolvers;
