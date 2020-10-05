import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../components/Flex';
import { configure, addDecorator } from '@storybook/react';
import apolloStorybookDecorator from 'apollo-storybook-react';
const typeDefs = `
type Color {
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

storiesOf('Flex', module)
  .addDecorator(
    apolloStorybookDecorator({
      typeDefs,
    })
  )
  .add('with test value', () => <Flex />);
