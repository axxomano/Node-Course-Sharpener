const http = require('http')

const server = http.createServer((req,resp)=>{
    console.log('Mano')
})

server.listen(4000)