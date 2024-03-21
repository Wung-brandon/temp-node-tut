const os = require('os')

// get user info
const user = os.userInfo()
// console.log(user)

// methods returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()

}

console.log(currentOs)