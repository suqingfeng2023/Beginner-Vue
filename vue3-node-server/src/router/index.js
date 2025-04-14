/** @format */

const express = require('express')
const router = express.Router()

const newsRouter = require('./news')
const userRouter = require('./user')
const articleRouter = require('./article')

router.use('/api', newsRouter, userRouter, articleRouter)

module.exports = router
