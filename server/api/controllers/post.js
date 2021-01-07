const express = require("express");
const app = express();
const PostService = require("../../services/controllers/post");

const postService = new PostService();

app.post("/post/create", (req, res) => {
    const post = req.body.post;

    postService.createPost(post)
        .then(() => res.status(201).json({
            message: "Post created successfully."
        }))
        .catch(() => res.status(400).json({
            message: "Validation error."
        }));
});

module.exports = app;