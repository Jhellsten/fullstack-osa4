const blogRouter = require('express').Router()
const Blog = require('../models/Blog')

blogRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog.find({})
    response.json(blogs)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  
})
  
blogRouter.post('/',async (request, response) => {
  try {
    const blog = new Blog(request.body)
    const result = await blog.save()

    response.status(201).json(result)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  

  
})

module.exports = blogRouter