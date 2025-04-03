const fs = require('node:fs')

const file1 = './day1/text.txt'
const file2 = './day1/text2.txt'

fs.readFile(file1, 'utf8', (err, data) => {
	try {
		fs.writeFile(file2, data.toUpperCase(), { flag: 'a+' }, err => {
			console.log(err)
		})
	} catch (err) {
		console.log(err)
	}
})
