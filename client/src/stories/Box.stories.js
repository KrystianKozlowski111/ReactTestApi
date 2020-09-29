import { storiesOf } from '@storybook/react';
import React from 'react';

import Box from '../components/box';

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

storiesOf('Box', module).add('Box', () => (
  <ApolloProvider2 client={client}>
    <Box />
  </ApolloProvider2>
));
