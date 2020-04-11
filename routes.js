/* eslint-disable no-undef */
const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())
routes
  .add('home', '/', '/')
  .add('login', '/login', '/login')
