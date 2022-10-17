const fs = require('fs')

module.exports = class Productos{

    constructor(filename){
        this.filename=filename    
    }
    save(obj){
        // console.log(obj)
        fs.readFile(`./${this.filename}.txt`,'utf-8',(error,data)=>{
            if(error){
                throw new Error(error)
            }else{              
                if(data == ''){
                    console.log('viene vacio')
                    obj.map((i)=>i.id = 1)
                    let dataString = JSON.stringify(obj)
                    fs.writeFile(`./${this.filename}.txt`,dataString,(error)=>{
                        if(error){
                            throw new Error(error)
                        }
                    })
                }else{
                    // si hay algo en el txt
                    let jsonData = JSON.parse(data)
                   
                    let ultimoElemento = JSON.parse(data).pop()

                    obj.map((i)=>i.id = ultimoElemento.id + 1)
                    
                    jsonData.push(obj[0])


                    fs.writeFile(`./${this.filename}.txt`,JSON.stringify(jsonData,null,2),(error)=>{
                        if(error){
                            throw new Error(error)
                        }
                    })

                }
            }
        })     
    }

    getById(id){     
        fs.readFile(`./${this.filename}.txt`,'utf-8',(error,data)=>{
            if(error){
                throw new Error(error)
            }else{
                let jsonData = JSON.parse(data)
                if(jsonData[id]!=undefined){

                    jsonData.map((el)=>{
                        if(el.id == id){
                            console.log(`El elemento con id: ${id} es: `, el)
                        }
                    })
                }else{
                    console.log(`Elemento con id ${id}, no existe`)
                }

            }
        })
    }
    
    async getAll(){
       
        fs.promises.readFile(`./${this.filename}.txt`,'utf-8')
            .then(data =>{
                        let jsonData = JSON.parse(data)
                        console.log(jsonData)
                        return jsonData       
                    })
            .catch(error=>console.log(error))
    }

    //  getAll(){
       
    //     fs.readFile(`./${this.filename}.txt`,'utf-8',(err,data)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             let jsonData = JSON.parse(data)
    //             console.log(jsonData)
    //             return jsonData       
    //         }
    //     })
           
    // }

    deleteById(id){
      
        fs.readFile(`./${this.filename}.txt`,'utf-8',(error,data)=>{
            if(error){
                throw new Error(error)
            }else{           
                let jsonData = JSON.parse(data)  
                    for (let index = 1; index < jsonData.length; index++) {     
                        if(jsonData[index].id == id){                     
                            jsonData.splice(index, 1)
                            fs.writeFile(`./${this.filename}.txt`,JSON.stringify(jsonData,null,2),(error)=>{
                                if(error){
                                    throw new Error(error)
                                }
                            }) 
                        }   
                    }                  
            }
        })
    }

    deleteAll(){
        fs.writeFile(`./${this.filename}.txt`,'',(error)=>{
            if(error){
                throw new Error(error)
            }
        })   
    }
}