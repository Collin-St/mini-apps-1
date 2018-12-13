const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// app.render('server');

app.get('/', (req, res) => {
  // res.send()
  console.log('GET received');
})

app.listen(port, () => console.log(`Listening on port ${port}`));

