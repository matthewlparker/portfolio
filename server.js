'use strict';

const express = require('express');
const PORT = process.env.PORT || 3500;

const app = express();
// const conString = 'postgres://postgres:Sidirume&7@localhost:5432';

app.use(express.static('./public'))

// app.get('/about', (request, response) =>
// response.sendFile('index.html', {root: './public'}));

app.get('*', (request, response) =>
  response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
