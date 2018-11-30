'use strict'

const express = require('express');
const path = require('path');

const app = express();


// Run static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'build/index.html'));
})
 
const port = 4000;

app.listen(port);
