/** @format */

const express = require('express')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const auth = require('../middleware/jwt')
const {
	privateKey,
	admin,
	jwtConfig,
	httpStatusCode,
	customStatusCode
} = require('../config')
const dayjs = require('dayjs')

// 登录
userRouter.post('/login', (req, res) => {
	const { username, password } = req.body
	if (!username || !password) {
		res.status(httpStatusCode.OK).json({
			message: '用户名或密码不能为空',
			data: null
		})
		return
	} else if (username !== admin.username || password !== admin.password) {
		res
			.status(httpStatusCode.OK)
			.json({ message: '用户名或密码不对', data: null })
		return
	}
	jwt.sign(
		{
			username,
			password
		},
		privateKey,
		jwtConfig,
		(err, token) => {
			if (err) {
				res.status(httpStatusCode.INTERNAL_SERVER_ERROR)
			} else {
				res.status(httpStatusCode.OK).json({
					code: customStatusCode.SUCCESS,
					message: '操作成功',
					data: {
						token,
						status: 'ok',
						type: 'account',
						currentUser: 'admin'
					}
				})
			}
		}
	)
})

// 用户信息
userRouter.get('/profile', auth, (req, res) => {
	res.status(httpStatusCode.OK).json({
		code: customStatusCode.SUCCESS,
		message: '操作成功',
		data: {
			name: 'Administrator',
			avatar:
				'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
			id: '00000001',
			username: 'admin',
			type: 'account',
			status: 'ok'
		}
	})
})

module.exports = userRouter
