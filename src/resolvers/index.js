const Query = require('./query');
const Mutation = require('./mutation');
const Note = require('./note');
const User = require('./useer');
const { GraphQLDataTime } = require('graphql-iso-date');

module.exports = {
  Query,
  Mutation,
  Note,
  User,
  DataTime: GraphQLDataTime
};