const http = require('http')

const server = http.createServer((req,resp)=>{
    //console.log(req.url,req.method,req.headers)
    //process.exit()

    resp.setHeader('Content-Type','text/html')
    resp.write('<html>')
    resp.write('<head><title>My first page</title></head>')
    if(req.url == '/')
    resp.write('<body><h1>Welcome to my Node Js project</h1></body>')
    else if(req.url == '/home')
    resp.write('<body><h1>Welcome home</h1></body>')
    else if(req.url == '/about')
    resp.write('<body><h1>Welcome to About Us page</h1></body>')
    else if(req.url == '/node')
    resp.write('<body><h1>Welcome to my Node Js projectt</h1></body>')
    resp.write('</html>')
    resp.end();
})

server.listen(3000)