const { gql } = require('apollo-server');
const userSchema = require('./user');

const typeDefs = gql`
  ${userSchema}
`;

module.exports = typeDefs;
