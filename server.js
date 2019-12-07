const express = require('express')
const request = require('request')

const app = express()
const port = 3000

const newurl = 'http://google.com/';

app.get('/', (req, res) => {
  console.log(req.params)
  request(newurl).pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
