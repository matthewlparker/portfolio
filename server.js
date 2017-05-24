'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
// const pg = require('pg');
const PORT = process.env.PORT || 5000;

const app = express();
// const conString = process.env.DATABASE_URL || 'postgres://postgres:Sidirume&7@localhost:5432';
// const client = new pg.Client(conString);

app.use(express.static('./public'))

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);

// app.get('/about', (request, response) =>
// response.sendFile('index.html', {root: './public'}));

app.get('*', (request, response) =>
  response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
