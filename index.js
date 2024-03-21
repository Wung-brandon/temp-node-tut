// console.log("hello world!")
// const fs = require('fs')
// fs.copyFileSync('file.txt', 'file2.txt')

// setInterval(() => {
//     console.log('hello world')
// }, 1000)

// module



const names = require('./name.module')
const greet = require('./utils.module')
const data = require('./alternative.module')
require('./add.module')
// console.log(greet)
// console.log(names)
// console.log(data)

// greet(names.john)
// greet(names.peter)
// greet.sayHi(names.john)

const lodash = require('lodash')
// console.log(lodash)
const items = [1, [2, [3, [4]]]]
const newItems = lodash.flattenDeep(items)
console.log(newItems)