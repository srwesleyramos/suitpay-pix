const express = require('express')

module.exports = class Server {

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }

    register() {
        this.app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
            console.log(`Server is running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
        })
    }

    registerRoutes() {
        this.app.use(require('../routes/Default'))
        this.app.use(require('../routes/Login'))
        this.app.use(require('../routes/SuitPay'))
    }
}