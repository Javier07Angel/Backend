var carruselModel = {}


const mongoose = require('mongoose')
const { config } = require('../../config')
var Schema = mongoose.Schema

var carruselShema= new Schema({
    nombre:String,
    codigo:String,
    // precio:Number,
    descripcion:String,
    imagen:String,
    // // imagen1:String,
    // // imagen2:String,
    // estado:String
    
})

const Mymodel = mongoose.model("carrusel",carruselShema)







carruselModel.Guardar = function(post, callback){

    const instancia = new Mymodel
    instancia.nombre = post.nombre
    instancia.codigo = post.codigo
    // // instancia.precio = parseInt(post.precio)
    instancia.descripcion = post.descripcion
    // instancia.estado = post.estado

    if(post.imagen == undefined || post.imagen == null || post.imagen == ""){
        instancia.imagen = "assets/default.jpg"
    }
    else{
        instancia.imagen = post.imagen
        // instancia.imagen1 = post.imagen1
        // instancia.imagen2 = post.imagen2
    }

    instancia.save().then((respuesta)=>{
        console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Guardado"})
    }).catch((error)=>{
        console.log(error)
        return callback({state:false, mensaje:"Error al Guardar Elemento"})
    })

   
}

carruselModel.Existecodigo = function(post, callback){

    Mymodel.findOne({codigo:post.codigo},{}).then((respuesta)=>{
        if(respuesta == null){
            return callback({existe:'no'})
        }
        else{
            if(respuesta.length ==0){
                return callback({existe:'no'})
            }
            else{
                return callback({existe:'si'})
            }
           
        }
    })

  
}

carruselModel.ListarcarruselActivos = function(post, callback){
    Mymodel.find({estado:"1"},{})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}



carruselModel.Listar = function(post, callback){
    Mymodel.find({},{})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

carruselModel.ListarId = function(post, callback){
    Mymodel.find({_id:post._id},{})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

carruselModel.Actualizar = function(post, callback){
    Mymodel.findOneAndUpdate({_id:post._id},{
        nombre:post.nombre,
        // precio:post.precio,
        descripcion:post.descripcion,
        imagen:post.imagen,
        // // imagen1:post.imagen1,
        // // imagen2:post.imagen2,
        // estado:post.estado


    }).then((respuesta)=>{
            console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Actualizado"})
    }).catch((error)=>{
        return callback({state:false, mensaje:"Error al Actualizar", error:error})
    })
}

carruselModel.Eliminar = function(post, callback){
    Mymodel.findOneAndDelete({_id:post._id}).then((respuesta)=>{
        console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Eliminado"})
    }).catch((error)=>{
        return callback({state:false, mensaje:"Error al Eliminar", error:error})
    })
}


module.exports.carruselModel = carruselModel
config.origins = [
    "http://localhost:4200"
]
