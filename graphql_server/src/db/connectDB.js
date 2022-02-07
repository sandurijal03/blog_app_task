import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('database connected');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
