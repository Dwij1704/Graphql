const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getUser = async token => {
  try {
    if (token) {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      return await User.findById(userId);
    }
    return null;
  } catch (err) {
    return null;
  }
};

module.exports = { getUser };
