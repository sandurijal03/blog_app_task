import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql_blog_app');
    console.log('database connected');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
