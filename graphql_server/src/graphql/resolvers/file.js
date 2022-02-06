import { GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { join, parse } from 'path';
import { ApolloError } from 'apollo-server-core';

const URL = 'http://localhost:8848';

export default {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (_, { file }, { Image }) => {
      let { filename, createReadStream, encoding, mimetype } = await file;
      let stream = createReadStream();
      let { ext, name } = parse(filename);

      name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ', '_');

      let serverFile = join(
        __dirname,
        '../',
        '../',
        '../',
        '../',
        'client',
        'public',
        'uploads/',
        `${name}${ext}`,
      );

      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);

      serverFile = `${URL}${serverFile.split('uploads')[1]}`;

      const img = await new Image({ filename, encoding, mimetype });
      await img.save();
      console.log(img);

      return serverFile;
    },
  },
};
