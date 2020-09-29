import { storiesOf } from '@storybook/react';
import React from 'react';

import Flex from '../components/flex';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider as ApolloProvider2 } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

storiesOf('Flex', module).add('Flex', () => (
  <ApolloProvider2 client={client}>
    <Flex />
  </ApolloProvider2>
));
