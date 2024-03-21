const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is our about page')
    }
    res.end(`
        <h1>Oops</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
    
    
}).listen(5000)