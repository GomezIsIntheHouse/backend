const http = require('http')
const env = require('./.env')

const server = http.createServer((_req,res)=>{
    res.end('hola como va')
})

const PORT = env.PORT

server.listen(PORT, ()=>{
    console.log('servidor corriendo')
})

