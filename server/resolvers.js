const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const colors = [
  {
    id: 1,
    title: 'blue',
    text: 'niebieski kolor cos',
  },
  {
    id: 2,
    title: 'green',
    text: 'zielony kolor cos',
  },
  {
    id: 3,
    title: 'red',
    text: 'fsdfsdfsdfds',
  },
];
const resolvers = {
  Query: {
    getColors: () => colors,
    getColorsById: (_, { id }) => colors.find((color) => color.id == id),
  },
};

module.exports = resolvers;
