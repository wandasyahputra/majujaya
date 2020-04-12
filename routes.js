/* eslint-disable no-undef */
const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())
routes
  .add('home', '/', '/home')
  .add('login', '/login', '/login')
  .add('search', '/search', '/search')
  .add('product', '/product/:id', '/product')
  .add('purchase', '/purchase', '/purchase')
