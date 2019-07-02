import React from 'react';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from './router';
import './material_styles/buttons.scss';
import './material_styles/cards_tiles.scss';
import './material_styles/collapsible.scss';
import './material_styles/colors.scss';
import './material_styles/utility.scss';

const host = 'http://10.150.16.133:3490/graphql';

const httpLink = new HttpLink({
  uri: host
  // headers: {
  //   authorization: `Bearer ${
  //     '71d86158fa98f9e7118fccc49513e0c491b64fd1'
  //   }`,
  // },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default hot(module)(App);
