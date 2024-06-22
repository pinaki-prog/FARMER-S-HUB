const ForumPost = require('../models/ForumPost');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = new ForumPost({ title, content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await ForumPost.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
