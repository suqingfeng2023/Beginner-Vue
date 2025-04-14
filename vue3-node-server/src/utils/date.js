/** @format */

const dayjs = require('dayjs')
const getRandom = require('./random')

function getDate(date = new Date(), format = 'YYYY-MM-DD HH:mm') {
	const year = getRandom(5, 20)
	const month = getRandom(-5, 5)
	const day = getRandom(-3, 6)
	return dayjs(date)
		.add(year, 'year')
		.add(month, 'month')
		.add(day, 'day')
		.format(format)
}

module.exports = getDate
