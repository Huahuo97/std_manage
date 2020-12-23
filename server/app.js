const fs = require('fs')
const path = require('path')
const express = require('express')
// const bodyParser = require('body-parser')
const login = require('./services/login')
const register = require('./services/register')
const signIn = require('./services/manage')
const info = require('./services/infomation')

const app = express()
// CORS & Preflight request
app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
})
app.use('/user', login)
app.use('/user', register)
app.use('/manage', signIn)
app.use('/student', info)
const port = process.env.PORT || 3000
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
  console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})
