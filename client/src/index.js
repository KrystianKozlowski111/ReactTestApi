import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './views/Main';
import * as serviceWorker from './serviceWorker';
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

ReactDOM.render(
  <ApolloProvider2 client={client}>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </ApolloProvider2>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
