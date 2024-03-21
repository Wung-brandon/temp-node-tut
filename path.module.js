const path = require('path')

// console.log(path)

const filePath = path.join('./python teen challenge', 'file.txt')
console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(__dirname, 'python teen challenge', 'file.txt')
console.log(absolute)