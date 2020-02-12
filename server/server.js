const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const trumpRoutes = require('./trumple')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/quote', trumpRoutes)



module.exports = server
