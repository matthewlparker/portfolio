'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();
// const conString = 'postgres://postgres:Sidirume&7@localhost:5432';

app.use(express.static('./public'))

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
