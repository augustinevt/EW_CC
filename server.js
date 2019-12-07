const express = require('express')
const request = require('request')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  const {
    section, sort, resultWindow, viral,
  } = req.query

  request({
    url: `https://api.imgur.com/3/gallery/${section}/${sort}/${resultWindow}/?showViral=${viral}`,
    headers: {
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT}`,
    },
  }).pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
