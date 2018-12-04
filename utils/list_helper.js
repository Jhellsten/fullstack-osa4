const dummy = (blogs) => {
  blogs = [
    {
      '_id': '5c06ec97e7dbd78320c39d44',
      'title': 'My first blog',
      'author': 'Hellsten',
      'url': 'www.blog.com',
      'likes': 10,
      '__v': 0
    }
  ]
  return blogs.length
}
const totalLikes = (blogs) => {
  let result = blogs.map(i => i.likes)
  result = result.reduce((c, n) => c +n)
  return result
}
  
module.exports = {
  dummy,
  totalLikes
}