/*jshint esversion: 6 */
const http = require('http');
const app = require('./app');

const port = 1000;
const server = http.createServer(app);

server.listen(port, () => console.log('SmashQL server listening on port ', port));
