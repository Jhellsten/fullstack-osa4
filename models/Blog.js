const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGODB_URI

mongoose.connect(url, {useNewUrlParser: true}, (err) => {if(err)console.log(err)})

const Blog = mongoose.model('Blog', {
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = Blog