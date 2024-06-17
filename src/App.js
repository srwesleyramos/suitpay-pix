require('dotenv').config()

const Server = require('./server/Server')
const server = new Server()

server.register()
server.registerRoutes()