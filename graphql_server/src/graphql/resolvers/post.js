export default {
  Query: {
    getCategory: async (parent, args, { Category }) => {
      try {
        const categories = Category.find({});
        return categories;
      } catch (err) {
        throw new Error();
      }
    },
    getPost: async (parent, args, { Post }, info) => {
      try {
        const post = await Post.find().populate('user');
        return post;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    getPostById: async (parent, { id }, { Post }, info) => {
      try {
        const post = await Post.findById(id);
        if (!post) {
          throw new Error(err.message);
        }
        return post;
      } catch (err) {
        throw new Error(err.message);
      }
    },
    getUserPost: async (parent, args, { Post, user }, info) => {
      try {
        const post = await Post.findOne({ user: user._id }).populate('user');
        return post;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    addCategory: async (parent, { name }, { Category }) => {
      try {
        const category = await new Category({ name });
        await category.save();
        console.log(category);
        return category;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
    createPost: async (parent, { postInput }, { Post, user }, info) => {
      try {
        const newPost = await new Post({
          ...postInput,
          user: user._id.toString(),
        });
        await newPost.save();
        return 'Post created successfully';
      } catch (err) {
        throw new Error(err.message);
      }
    },
    editPost: async (parent, { id, postInput }, { Post, user }, info) => {
      try {
        let post = await Post.findById(id).populate('user');
        if (!post) {
          throw new Error('post with that id in not found');
        }

        console.log(post);
        if (post.user.email !== user.email) {
          throw new Error('you cannot edit other post');
        }

        post = await Post.findByIdAndUpdate(
          id,
          { ...postInput },
          { new: true },
        );
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
    deletePost: async (parent, { id }, { Post, user }, info) => {
      try {
        const post = await Post.findById(id).populate('user');
        if (!post) {
          throw new Error('Post with that ID is not found');
        }
        if (post.user.email !== user.email) {
          throw new Error('you cannot delete other post');
        }
        await Post.findByIdAndDelete(id);
        return 'Post deleted succeessfully';
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
