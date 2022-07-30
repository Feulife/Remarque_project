const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = reqiure('./schema.js');
require('dotenv').config();
const db = require('./db');
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

const models = require('./models');
let notes = [
  { id: '1', content: 'Script_1', author: 'Programmer' },
  { id: '2', content: 'Script_2', author: 'Coder' },
  { id: '3', content: 'Script_3', author: 'Developer' }
];

const resolvers = require('./resolvers');
const app = express();

db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { models };
  }
});
server.applyMiddleware({ app, path: '/Remarque_project' });
app.listen(port, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}$(server.graphqlPath)`
  )
);
