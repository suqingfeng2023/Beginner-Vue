/** @format */

module.exports = {
	newsData: require('./db/news.json'),
	privateKey: 'secret-key__1314@@4131',
	admin: {
		username: 'admin',
		password: 'admin'
	},
	httpServer: {
		port: 4000,
		host: 'localhost'
	},
	customStatusCode: {
		SUCCESS: 10000
	},
	httpStatusCode: {
		OK: 200,
		CREATED: 201,
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		FORBIDDEN: 403,
		NOT_FOUND: 404,
		INTERNAL_SERVER_ERROR: 500
	},
	jwtConfig: {
		expiresIn: '2h'
	}
}
