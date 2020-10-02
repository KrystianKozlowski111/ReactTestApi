const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Color {
    id: ID!
    title: String!
    text: String!
    img: String!
  }

  type Query {
    getColors: [Color]
    getColorsByTitle(title: String!): Color
  }
`;

module.exports = typeDefs;
