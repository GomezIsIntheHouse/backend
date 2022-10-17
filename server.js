
const http = require('http')
require('dotenv').config()

const resPong = (_req,res) => {
    res.end("<h1>PONG</h1>")
}

const saludar = (_req,res)=>{
    const reqHour = new Date().getHours()
    console.log(reqHour)
    if(reqHour>5 && reqHour<13){
        res.end("<h1>Buenos Dias</h1>")
    }else if( reqHour>12 && reqHour<20){
        res.end("<h1>Buenas Tardes</h1>")   
    }else if(reqHour>20 ){
        res.end("<h1>Buenas noches</h1>")
    }
}

const server = http.createServer( async(req,res)=>{
    switch (req.url) {
        case '/ping':
            resPong(req,res)
            break;
        case '/saludo':
            saludar(req,res)
            break;
        default:
            res.end("Flaco, aca no hay nada")
            break;
    }
})

const PORT = process.env.PORT

server.listen(PORT, ()=>{
    console.log('servidor corriendo en puerto: ',PORT)
})

