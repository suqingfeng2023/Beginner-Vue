/** @format */

const express = require('express')

const articleRouter = express.Router()
const { customStatusCode } = require('../config')

const Mock = require('mockjs')
const auth = require('../middleware/jwt')
const getDate = require('../utils/date')
const getRandom = require('../utils/random')

console.log(getDate())

// 定义数据模板
const template = {
	'list|100': [
		{
			id: '@id',
			stem: '@ctitle(5, 18)',
			'creator|1': [
				'井川里予',
				'孤独症患者',
				'山村码农',
				'admin',
				'柳生雪姬',
				'独孤求败',
				'惊鸿仙子',
				'白衣少年',
				'仗剑走天涯',
				'风清扬',
				'袁承志',
				'令狐冲',
				'李寻欢',
				'连城诀',
				'无痕公子',
				'潇洒走一回',
				'劈柴喂马',
				'Bugger',
				'金蛇郎君',
				'三分归元气',
				'西施浣纱',
				'代码垂钓者',
				'为你痴狂'
			],
			'category|1': [
				'前端',
				'后端',
				'算法',
				'大数据',
				'人工智能',
				'区块链',
				'嵌入式',
				'物联网',
				'云计算',
				'运维',
				'测试',
				'数据库',
				'鸿蒙',
				'WebGis',
				'Unity3D',
				'UE4',
				'Cocos',
				'全栈'
			],
			'createdAt|1': [
				'2032-01-12 08:20',
				'2049-12-26 09:17',
				'2031-02-07 12:40',
				'2044-12-11 14:50',
				'2030-11-23 16:31',
				'2032-06-30 11:13',
				'2029-11-17 15:09',
				'2031-07-01 07:30',
				'2030-09-18 22:40',
				'2037-12-21 10:29',
				'2050-05-07 08:50',
				'2035-10-01 19:06',
				'2033-06-09 09:10',
				'2222-11-11 20:01',
				'2041-03-14 01:27',
				'2038-10-31 15:49',
				'2033-09-22 13:06',
				'2036-12-28 23:35',
				'2034-02-28 14:02'
			],
			'likeCount|1-10000': 100,
			'status|1': ['published', 'draft'],
			'views|100-1000': 100,
			image: '@image(200x100, @color, @cname)',
			'isTop|1': [true, false],
			'isRecommend|1': [true, false],
			'isHot|1': [true, false],
			content: '@cparagraph(3, 10)',
			'comments|1-100': 100
		}
	]
}

// 生成模拟数据
const data = Mock.mock(template)

const creators = [
	'井川里予',
	'孤独症患者',
	'山村码农',
	'admin',
	'柳生雪姬',
	'独孤求败',
	'惊鸿仙子',
	'白衣少年',
	'仗剑走天涯',
	'风清扬',
	'袁承志',
	'令狐冲',
	'李寻欢',
	'连城诀',
	'无痕公子',
	'潇洒走一回',
	'劈柴喂马',
	'Bugger',
	'金蛇郎君',
	'三分归元气',
	'西施浣纱',
	'代码垂钓者',
	'为你痴狂'
]
const categories = [
	'前端',
	'后端',
	'算法',
	'大数据',
	'人工智能',
	'区块链',
	'嵌入式',
	'物联网',
	'云计算',
	'运维',
	'测试',
	'数据库',
	'鸿蒙',
	'WebGis',
	'Unity3D',
	'UE4',
	'Cocos',
	'全栈'
]

// 获取文章列表
articleRouter
	.use(auth)
	.get('/article', (req, res) => {
		// 获取分页参数
		const { current = 1, pageSize = 10 } = req.query
		// 计算分页数据
		const start = (+current - 1) * pageSize
		// 结束位置
		const end = current * +pageSize
		// 返回分页数据
		res.status(200).json({
			code: customStatusCode.SUCCESS,
			message: '操作成功',
			data: {
				rows: data.list
					// 过滤数据
					.map((item) => ({
						id: item.id,
						stem: item.stem,
						creator: item.creator,
						category: item.category,
						createdAt: item.createdAt,
						likeCount: item.likeCount,
						views: item.views
					}))
					// 分页数据
					.slice(start, end),
				total: data.list.length,
				current: +current,
				pageTotal: Math.ceil(data.list.length / +pageSize)
			}
		})
	})
	// 获取文章详情
	.get('/article/:id', (req, res) => {
		// 获取文章id
		const { id } = req.params
		// 查找文章
		const article = data.list.find((item) => item.id === id)
		if (article) {
			// 文章存在

			// 返回文章
			res.status(200).json({
				code: customStatusCode.SUCCESS,
				message: '操作成功',
				data: article
			})
		} else {
			// 文章不存在
			res.status(404).json({
				message: '文章不存在',
				data: null
			})
		}
	})

	// 添加文章
	.post('/article', (req, res) => {
		// 获取请求体数据
		const { stem, content } = req.body
		// 生成文章id
		// 生成文章
		const article = {
			id: Mock.mock('@id'),
			stem,
			creator: creators[getRandom(0, creators.length - 1)],
			category: categories[getRandom(0, categories.length - 1)],
			content,
			createdAt: getDate(),
			likeCount: 0,
			views: 0
		}
		// 添加文章
		data.list.push(article)
		// 返回添加结果
		res.status(201).json({
			code: customStatusCode.SUCCESS,
			message: '操作成功',
			data: article
		})
	})
	// 修改文章
	.put('/article/:id', (req, res) => {
		// 获取文章id
		const { id } = req.params
		// 查找文章
		const article = data.list.find((item) => item.id === id)
		if (article) {
			// 文章存在
			// 更新文章
			Object.assign(article, req.body)
			// 返回更新结果
			res.status(200).json({
				code: customStatusCode.SUCCESS,
				message: '操作成功',
				data: article
			})
		} else {
			// 文章不存在
			res.status(404).json({
				message: '文章不存在',
				data: null
			})
		}
	})
	// 删除文章
	.delete('/article/:id', (req, res) => {
		// 获取文章id
		const { id } = req.params
		// 查找文章索引
		const index = data.list.findIndex((item) => item.id === id)
		if (index !== -1) {
			// 文章存在
			// 删除文章
			data.list.splice(index, 1)
			// 返回删除结果
			res.status(200).json({
				code: customStatusCode.SUCCESS,
				message: '操作成功',
				data: null
			})
		} else {
			// 文章不存在
			res.status(404).json({
				message: '文章不存在',
				data: null
			})
		}
	})

module.exports = articleRouter
