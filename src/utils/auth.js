const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getUser = async token => {
  try {
    if (token) {
      const decodedToken = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      console.log('Decoded Token:', decodedToken);
      return await User.findById(decodedToken.userId);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = { getUser };
