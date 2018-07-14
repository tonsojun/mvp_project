const express = require('express')
const app = express();
const db = require("../database");

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// use this method to route data from client to db will place function inside for now will refactor out later
app.post('/', function(req, res) {
  console.log('post is working in the server')

})
let port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
