const fs = require('fs')

module.exports = fs.createReadStream('words.txt', 'utf8')
