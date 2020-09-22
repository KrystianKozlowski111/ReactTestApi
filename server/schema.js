const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Color {
    id: ID!
    title: String!
    text: String!
  }

  type Query {
    getColors: [Color]
    getColorsById(id: ID!): Color
  }
`;

module.exports = typeDefs;
