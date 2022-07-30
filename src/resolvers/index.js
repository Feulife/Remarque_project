const Query = require('./query');
const Mutation = require('./mutation');
const { GraphQLDataTime } = require('graphql-iso-date');

module.exports = {
  Query,
  Mutation,
  DataTime: GraphQLDataTime
};