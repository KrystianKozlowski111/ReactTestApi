import React from 'react';
import { shallow } from 'enzyme';
import Section from '../components/Section';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

it('renders Section without crashing', () => {
  shallow(
    <ApolloProvider client={client}>
      <Section />
    </ApolloProvider>
  );
});
it('includes Flex', () => {
  const section = shallow(
    <ApolloProvider client={client}>
      <Section />
    </ApolloProvider>
  );
  expect(section.containsMatchingElement(<Flex />)).toEqual(true);
});
