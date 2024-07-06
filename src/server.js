const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const context = require('./context');
const connectDB = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

connectDB();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
