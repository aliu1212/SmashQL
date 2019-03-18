const express = require('express');
// const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
// const router = require('./router');
const graphqlHTTP = require('express-graphql');
const schema = require('../db/schema');


const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// app.use('/api', router);
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// app.use(express.static(path.join(__dirname, '../client/dist')));

module.exports = app;
