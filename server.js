'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('.'))

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
