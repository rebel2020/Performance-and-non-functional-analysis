const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.port || 3490;
require('./config')
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphqlapi/schemaPerformance");
const resolvers = require("./graphqlapi/resolversPerformance");

const SERVER = new ApolloServer({
  typeDefs,
  resolvers
})

SERVER.applyMiddleware({app})

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});

