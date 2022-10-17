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

app.get('/productoRandom', async(_req,res)=>{
    try {
        min = Math.ceil(1);
        max = Math.floor(4);
        const number = Math.floor(Math.random() * (max - min) + min);
        
        const respClase = await obj1.getById(number)
        res.send({
            id:number,
            data:respClase
        })

    } catch (error) {
        console.log('error',error)
    }
})





app.get('/ping', (_req,res)=>{
    res.send("<h1>PONG</h1>")
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.info('Server up and running on port: ', PORT)
})