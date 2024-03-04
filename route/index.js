const express = require('express')
const router = express.Router()
const apiRoute = require('./api/index.js')

const api = process.env.BASE_URL

router.use(api, apiRoute)

module.exports = router