const path = require('path')
const express = require('express')
const server = express()


const activityRoutes = require('./activities')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/activities', activityRoutes)

module.exports = server
