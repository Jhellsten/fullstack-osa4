require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/index')

const url = process.env.MONGODB_URI

mongoose.connect(url, {useNewUrlParser: true}, (err) => {if(err)console.log(err)})

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogRouter)
app.get('*', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})