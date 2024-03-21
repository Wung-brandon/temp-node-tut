// Asynchronous way or method
// const {readFileSync, writeFileSync} = require('fs')

// const read = readFileSync('file2.txt', 'utf8')

// const talent = 'my talent is singing'
// const write = writeFileSync('file.txt', `${talent}`)
// console.log(write)

// Synchronous method uses a callback style
const {readFile, writeFile} = require('fs')


readFile('file.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)

})