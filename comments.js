// Create web server using Express.js
// Create a route for comments
// Create a route for comments/:commentId
// Create a route for comments/:commentId/edit
// Create a route for comments/:commentId/delete
// Create a route for comments/new
// Create a route for comments/:commentId/replies/new

// Require the Express module
const express = require('express');

// Create a new router
const commentsRouter = express.Router();

// Import the comments array
const { comments } = require('../data');

// Path: /comments
commentsRouter.get('/', (req, res) => {
  res.json(comments);
});

// Path: /comments/:commentId
commentsRouter.get('/:commentId', (req, res) => {
  const commentId = Number(req.params.commentId);
  const comment = comments.find((comment) => comment.id === commentId);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Path: /comments/:commentId/edit
commentsRouter.get('/:commentId/edit', (req, res) => {
  const commentId = Number(req.params.commentId);
  const comment = comments.find((comment) => comment.id === commentId);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Path: /comments/:commentId/delete
commentsRouter.get('/:commentId/delete', (req, res) => {
  const commentId = Number(req.params.commentId);
  const commentIndex = comments.findIndex((comment) => comment.id === commentId);
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
    res.json({ message: `Comment ${commentId} deleted` });
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Path: /comments/new
commentsRouter.get('/new', (req, res) => {
  res.json({ message: 'Create a new comment' });
});

// Path: /comments/:commentId/replies/new
commentsRouter.get('/:commentId/replies/new', (req, res) => {
  const commentId = Number(req.params.commentId);
  res.json({ message: `Create a reply for comment ${commentId}` });
});
