const { gql } = require('apollo-server');

const typeDefs = gql`
  type Color {
    id: ID!
    title: String!
    text: String!
    img: String
  }

  type Query {
    getColors: [Color]
    getColorsByTitle(title: String!): Color
  }
  type Mutation {
    updateColor(id: ID!, title: String, text: String, img: String): Color
    deleteColor(id: ID!): Color
  }
`;

module.exports = typeDefs;
