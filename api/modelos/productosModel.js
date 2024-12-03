var productosModel = {}


const mongoose = require('mongoose')
const { config } = require('../../config')
var Schema = mongoose.Schema

var productosShema= new Schema({
    nombre:String,
    codigo:String,
    precio:Number,
    descripcion:String,
    imagen:String,
    estado:String
    
})

const Mymodel = mongoose.model("productos",productosShema)



productosModel.Guardar = function(post, callback){

    const instancia = new Mymodel
    instancia.nombre = post.nombre
    instancia.codigo = post.codigo
    instancia.precio = parseInt(post.precio)
    instancia.descripcion = post.descripcion
    instancia.estado = post.estado

    if(post.imagen == undefined || post.imagen == null || post.imagen == ""){
        instancia.imagen = "assets/default.jpg"
    }
    else{
        instancia.imagen = post.imagen
    }

    instancia.save().then((respuesta)=>{
        console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Guardado"})
    }).catch((error)=>{
        console.log(error)
        return callback({state:false, mensaje:"Error al Guardar Elemento"})
    })

   
}

productosModel.Existecodigo = function(post, callback){

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

    // var posicion = bdproductos.findIndex((item)=> item.email == post.email)

    // if(posicion >= 0){
    //     return callback({existe:'si'})
    // }
    // else{
    //     return callback({existe:'no'})
    // }
}

productosModel.ListarProductosActivos = function(post, callback){
    Mymodel.find({estado:"1"},{})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}



productosModel.Listar = function(post, callback){
    Mymodel.find({},{password:0})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

productosModel.ListarId = function(post, callback){
    Mymodel.find({_id:post._id},{password:0})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

productosModel.Actualizar = function(post, callback){
    Mymodel.findOneAndUpdate({_id:post._id},{
        nombre:post.nombre,
        precio:post.precio,
        descripcion:post.descripcion,
        imagen:post.imagen,
        estado:post.estado


    }).then((respuesta)=>{
            console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Actualizado"})
    }).catch((error)=>{
        return callback({state:false, mensaje:"Error al Actualizar", error:error})
    })
}

productosModel.Eliminar = function(post, callback){
    Mymodel.findOneAndDelete({_id:post._id}).then((respuesta)=>{
        console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Eliminado"})
    }).catch((error)=>{
        return callback({state:false, mensaje:"Error al Eliminar", error:error})
    })
}


module.exports.productosModel = productosModel
config.origins = [
    "http://localhost:4200"
]
