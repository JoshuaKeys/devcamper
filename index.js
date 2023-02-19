const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

console.log('Hello');

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});