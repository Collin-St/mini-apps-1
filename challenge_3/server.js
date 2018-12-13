const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('./db/mongodb.js')



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // res.send()
  console.log('GET received');
})

app.listen(port, () => console.log(`Listening on port ${port}`));

