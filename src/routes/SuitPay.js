const auth = require('../middlewares/Auth')
const axios = require('axios')
const express = require('express')

const router = express.Router()

router.post('/api/pix', [auth], (req, res) => {
    const {requestNumber, dueDate, amount, name, document, email, clientId, clientSecret} = req.body

    if (!requestNumber || !dueDate || !amount || !name || !document || !email || !clientId || !clientSecret) {
        return res.status(400).json({
            message: 'você deve fornecer todos os dados necessários.'
        })
    }

    const request = {
        requestNumber,
        dueDate,
        amount,
        client: {
            name,
            document,
            email
        }
    }

    const headers = {
        ci: clientId,
        cs: clientSecret
    }

    axios.post(process.env.SUITPAY_URL, request, {headers})
        .then((response) => res.json({message: response.data.paymentCode}))
        .catch((error) => res.json({message: error.response.data.message}))
})

module.exports = router