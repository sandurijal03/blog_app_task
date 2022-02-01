const getAllBlogs = (req, res) => {
  res.send('<h1>Get Blogs</h1>');
};

const postBlog = (req, res) => {
  res.send('<h1>Post Blogs</h1>');
};

const getBlog = (req, res) => {
  const { id } = req.params;
  res.send(`Geting Blog ${id}`);
};

const updateBlog = (req, res) => {
  const { id } = req.params;
  res.send(`Updating Blog ${id}`);
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  res.send(`Deleting Blog ${id}`);
};

export { getAllBlogs, getBlog, postBlog, updateBlog, deleteBlog };
