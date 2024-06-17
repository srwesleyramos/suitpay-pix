const auth = require('../middlewares/Auth')
const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/api/login', (req, res) => {
    const {user, pass} = req.body

    if (user !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
        return res.status(401).json({message: 'Os dados são inválidos, revise e tente novamente.'})
    }

    res.json({
        token: jwt.sign({}, process.env.APP_SECRET, {expiresIn: '24h'})
    })
})

router.post('/api/test', [auth], (req, res) => {
    res.json({message: 'hello world!'})
})

module.exports = router