const { getUser } = require('./utils/auth');

const context = async ({ req }) => {
  const token = req.headers.authorization || '';
  const user = await getUser(token);
  return { user };
};

module.exports = context;
