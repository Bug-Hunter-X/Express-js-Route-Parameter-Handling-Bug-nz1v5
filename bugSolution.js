const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate if userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to find the user with id userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});