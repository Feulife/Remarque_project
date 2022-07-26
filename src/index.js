const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const db = require('./db');
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
db.connect(DB_HOST);
let notes = [
  { id: '1', content: 'Script_1', author: 'Programmer' },
  { id: '2', content: 'Script_2', author: 'Coder' },
  { id: '3', content: 'Script_3', author: 'Developer'}
];
const typeDefs = gql`
  type Note {
    id: ID!,
    content: String!,
    author: String!
  }
  
  type Query {
    hello: String,
    notes: [Note!]!,
    note: (id: ID!): Note!
  }
  
  type Mutation {
    newNote(content: String!): Note!
  }`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.lenght + 1),
        content: args.content,
        author: 'Programmist'
      };
      notes.push(noteValue);
      return noteValue;
    }
  }
};
const app = express();
const server = new ApolloServer({ typeDefs, resolvers});
server.applyMiddleware({ app, path: '/Remarque_project'})
app.listen(port, () => console.log(`GraphQL Server running at http://localhost:${port}$(server.graphqlPath)`));
