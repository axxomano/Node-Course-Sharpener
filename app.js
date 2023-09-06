const http = require('http')
const fs = require('fs')

const server = http.createServer((req,resp)=>{
    //console.log(req.url,req.method,req.headers)
    //process.exit()
    if(req.url == '/')
{
    resp.write('<html>')
    resp.write('<head><title>My first page</title></head>')
    resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SUBMIT</button></body>')
    resp.write('</html>')
    return resp.end();
}
    else if(req.url == '/message' && req.method == 'POST'){
        resp.write('<body><h1>Message</h1></body>')
        fs.writeFileSync('message.txt','DUMMY')
        resp.statusCode = 302
        resp.setHeader('Location', '/')
        return resp.end()
    }
})

server.listen(3000)