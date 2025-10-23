const myReadFile = require('../utils/myReadFile');
const myWriteFile = require('../utils/myWriteFile');

const postsFile = 'posts.json';

module.exports = {
  GET_ALL_POSTS(req, res) {
    const posts = myReadFile(postsFile);
    console.log("Posts:", posts);
    res.status(201)
    res.json(posts);
  },

  CREATE_POST: async (req, res) => {
    const posts = myReadFile(postsFile);
    const newPost = {
      id: Date.now(),
      ...req.body,
    };
    posts.push(newPost);
    await myWriteFile(postsFile, posts);
    res.status(201).json(newPost);
  },

  GET_POST(req, res) {
    const posts = myReadFile(postsFile);
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(201);
    res.json(post);
  },

  UPDATE_POST: async (req, res) => {
    const posts = myReadFile(postsFile);
    const index = posts.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Not found" });

    posts[index] = { ...posts[index], ...req.body };
    await myWriteFile(postsFile, posts);
    res.status(201);
    res.json(posts[index]);
  },

  DELETE_POST: async (req, res) => {
    const posts = myReadFile(postsFile);
    const newPosts = posts.filter(p => p.id != req.params.id);
    await myWriteFile(postsFile, newPosts);
    res.status(201);
    res.json({ message: "Post deleted" });
  }
};