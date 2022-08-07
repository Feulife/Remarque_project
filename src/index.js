const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = reqiure('./schema.js');
require('dotenv').config();
const db = require('./db');
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
const cors = require('cors');
app.use(cors());
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const models = require('./models');
let notes = [
  { id: '1', content: 'Script_1', author: 'Programmer' },
  { id: '2', content: 'Script_2', author: 'Coder' },
  { id: '3', content: 'Script_3', author: 'Developer' }
];

const resolvers = require('./resolvers');
const app = express();
const jwt = require('jsonwebtoken');
const getUser = token => {
  if (token) {
    try {
      return jwt.verify(token, process,env.JWT_SECRET);
    } catch (err) {
      new Error('Session invalid');
    }
  }
};

db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
  context: async ({ req }) => {
    const token = req.headers.authorization;
    const user = await getUser(token);
    console.log(user);
    return { models, user };
  }
});
server.applyMiddleware({ app, path: '/Remarque_project' });
app.listen(port, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}$(server.graphqlPath)`
  )
);
