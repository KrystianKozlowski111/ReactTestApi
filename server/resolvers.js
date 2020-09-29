const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const colors = [
  {
    id: 1,
    title: 'Blue',
    text: 'Niebieski kolor cos',
  },
  {
    id: 2,
    title: 'Green',
    text: 'Zielony kolor cos',
  },
  {
    id: 3,
    title: 'Red',
    text: 'Czerwony kolor cos',
  },
];
const resolvers = {
  Query: {
    getColors: () => colors,
    getColorsById: (_, { id }) => colors.find((color) => color.id == id),
  },
};

module.exports = resolvers;
