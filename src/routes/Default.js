const express = require('express')
const path = require('path')

const router = express.Router()

router.use('/app', express.static(path.join(__dirname, '../../public')))

router.get('/app/login', (req, res) =>
    res.redirect('/app/login.html')
)

router.get('/app/', (req, res) => {
    res.redirect('/app/home.html')
})

module.exports = router