import { Schema, model } from 'mongoose';

const ImageSchema = new Schema(
  {
    filename: String,
    mimetype: String,
    encoding: String,
  },
  { timestamps: true },
);

const Image = model('Image', ImageSchema);
export default Image;
