/** @format */

const express = require('express')
const cors = require('cors')
const { httpServer } = require('./config')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// 静态资源托管
app.use('/public', express.static('static'))

app.use(require('./router/index'))

app.listen(httpServer.port, () => {
  console.log(
    `Server is running at ${
      'http://' + httpServer.host + ':' + httpServer.port
    }`
  )
})
