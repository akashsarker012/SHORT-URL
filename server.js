const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const route = require('./route')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(route)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})