const cors =require("cors")

const data = require("./data.json")
const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artesania', (req, res) => {
    res.send(data)
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})