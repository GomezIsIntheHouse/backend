const express = require('express')
const prod = require('./Productos.js')
const app = express()

require('dotenv').config()


const obj1 = new prod('productos')

app.get('/productos', async(_req,res)=>{
    try {          
        const respClase = await obj1.getAll()
        res.send({data:respClase})
    
    } catch (error) {
        console.log('error',error)
    }
})


// app.get('/productos', (_req,res)=>{
//     try {          
//         const respClase =  obj1.getAll()
//         console.log(respClase)
//         res.send({data:respClase})
        
    
//     } catch (error) {
//         console.log('error',error)
//     }
// })


app.get('/ping', (_req,res)=>{
    res.send("<h1>PONG</h1>")
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.info('Server up and running on port: ', PORT)
})