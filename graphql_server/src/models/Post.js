import { model, Schema } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    categories: [String],
    file: {
      type: ObjectId,
      ref: 'Image',
    },
  },
  { timestamps: true },
);

export default model('Post', postSchema);
