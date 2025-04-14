/** @format */

const express = require('express')
const newsRouter = express.Router()
const { newsData, customStatusCode } = require('../config')

newsRouter.get('/news', (req, res) => {
  res.json({
    code: customStatusCode.SUCCESS,
    ...newsData
  })
})

module.exports = newsRouter
