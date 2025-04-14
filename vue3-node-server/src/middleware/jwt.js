/** @format */
const jwt = require('jsonwebtoken')

const { privateKey, jwtConfig } = require('../config')

// 鉴权中间件
function auth(req, res, next) {
  const { authorization } = req.headers
  // 无token
  if (!authorization) {
    // 直接响应未认证
    res.status(401).json({ message: '未登录', data: null })
  }
  const [, token] = authorization.split(' ')
  jwt.verify(token, privateKey, jwtConfig, (err) => {
    if (err) {
      res.status(401).json({ message: '登录过期', data: null })
    } else {
      // 放行
      next()
    }
  })
}

module.exports = auth
