import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ApolloProvider } from 'react-apollo';
import Router from "./router";

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

let host = 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
  uri: host,
  // headers: {
  //   authorization: `Bearer ${
  //     '71d86158fa98f9e7118fccc49513e0c491b64fd1'
  //   }`,
  // },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
