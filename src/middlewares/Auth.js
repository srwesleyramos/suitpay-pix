const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({message: 'Você não tem permissão para acessar esta página'})
    }

    try {
        jwt.verify(token, process.env.APP_SECRET)

        next()
    } catch (error) {
        res.status(401).json({message: 'Você não tem permissão para acessar esta página'})
    }
}