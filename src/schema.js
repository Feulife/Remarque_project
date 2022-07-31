const { gql } = require('apollo-server-express');

module.exports = gql`
scalar DataTime
  type Note {
    id: ID!,
    content: String!,
    author: String!
    createdAt: DataTime!
    updateAt: DataTime!
    favoriteCount: Int!
    favoritedBy: [User!]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: {Note!}!
    favorites: [Note!]
  }
  
  type Query {
    hello: String,
    notes: [Note!]!,
    note: (id: ID!): Note!
    user(username: String!);
  }
  
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    singUp(username: String!, email: String!, password: String!): String!
    singIn(username: String, email: String, password: String!): String!
    toggleFavorite(id: ID!): Note!
  }`;