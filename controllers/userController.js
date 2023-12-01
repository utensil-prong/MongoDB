const User = require('../models/userModel');

// Controller to get all users
function getAllUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(users);
    }
  });
}

// Controller to create a new user
function createUser(req, res) {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(400).json({ error: 'Bad Request' });
    } else {
      res.status(201).json(user);
    }
  });
}

module.exports = {
  getAllUsers,
  createUser,
};
