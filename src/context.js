const { getUser } = require('./utils/auth');

const context = async ({ req }) => {
  const token = req.headers.authorization || '';
  console.log('Token:', token);

  const user = await getUser(token);
  console.log('User:', user);

  return { user };
};

module.exports = context;
