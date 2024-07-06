const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const Mutation = {
  signup: async (parent, { email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return {
      token,
      user,
    };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('No such user found');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid password');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return {
      token,
      user,
    };
  },
};

module.exports = Mutation;
