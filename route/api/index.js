const express = require('express')
const router = express.Router()
const shorturlRoute = require('./shorturl')

router.use('/shorturl', shorturlRoute)

module.exports = router