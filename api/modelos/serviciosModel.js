var serviciosModel = {}


const mongoose = require('mongoose')
const { config } = require('../../config')
var Schema = mongoose.Schema

var serviciosShema= new Schema({
    nombre:String,
    codigo:String,
    // precio:Number,
    descripcion:String,
    imagen:String,
    estado:String
    
})

const Mymodel = mongoose.model("servicios",serviciosShema)



// serviciosModel.Guardar = function(post, callback){

//     const instancia = new Mymodel
//     instancia.nombre = post.nombre
//     // instancia.codigo = post.codigo
    

//     instancia.save().then((respuesta)=>{
//         console.log(respuesta)
//         return callback({state:true, mensaje:"Elemento Guardado"})
//     }).catch((error)=>{
//         console.log(error)
//         return callback({state:false, mensaje:"Error al Guardar Elemento"})
//     })

   
// }

// serviciosModel.Existecodigo = function(post, callback){

//     Mymodel.findOne({codigo:post.codigo},{}).then((respuesta)=>{
//         if(respuesta == null){
//             return callback({existe:'no'})
//         }
//         else{
//             if(respuesta.length ==0){
//                 return callback({existe:'no'})
//             }
//             else{
//                 return callback({existe:'si'})
//             }
           
//         }
//     })

//     // var posicion = bdservicios.findIndex((item)=> item.email == post.email)

//     // if(posicion >= 0){
//     //     return callback({existe:'si'})
//     // }
//     // else{
//     //     return callback({existe:'no'})
//     // }
// }

// serviciosModel.Listar = function(post, callback){
//     Mymodel.find({},{password:0})
//     .then((respuesta)=> {
//         return callback({state:true, datos:respuesta})
//     })
//     .catch((error)=>{
//         return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
//     })
// }

// serviciosModel.ListarId = function(post, callback){
//     Mymodel.find({_id:post._id},{password:0})
//     .then((respuesta)=> {
//         return callback({state:true, datos:respuesta})
//     })
//     .catch((error)=>{
//         return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
//     })
// }

// serviciosModel.Actualizar = function(post, callback){
//     Mymodel.findOneAndUpdate({_id:post._id},{
//         nombre:post.nombre }).then((respuesta)=>{
//             console.log(respuesta)
//         return callback({state:true, mensaje:"Elemento Actualizado"})
//     }).catch((error)=>{
//         return callback({state:false, mensaje:"Error al Actualizar", error:error})
//     })
// }

// serviciosModel.Eliminar = function(post, callback){
//     Mymodel.findOneAndDelete({_id:post._id}).then((respuesta)=>{
//         console.log(respuesta)
//         return callback({state:true, mensaje:"Elemento Eliminado"})
//     }).catch((error)=>{
//         return callback({state:false, mensaje:"Error al Eliminar", error:error})
//     })
// }

// serviciosModel.ListarserviciosActivos = function(post, callback){
//     Mymodel.find({estado:"1"},{})
//     .then((respuesta)=> {
//         return callback({state:true, datos:respuesta})
//     })
//     .catch((error)=>{
//         return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
//     })
// }



serviciosModel.Guardar = function(post, callback){

    const instancia = new Mymodel
    instancia.nombre = post.nombre
    instancia.codigo = post.codigo
    // instancia.precio = parseInt(post.precio)
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

serviciosModel.Existecodigo = function(post, callback){

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

    // var posicion = bdservicios.findIndex((item)=> item.email == post.email)

    // if(posicion >= 0){
    //     return callback({existe:'si'})
    // }
    // else{
    //     return callback({existe:'no'})
    // }
}

serviciosModel.ListarserviciosActivos = function(post, callback){
    Mymodel.find({estado:"1"},{})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}



serviciosModel.Listar = function(post, callback){
    Mymodel.find({},{password:0})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

serviciosModel.ListarId = function(post, callback){
    Mymodel.find({_id:post._id},{password:0})
    .then((respuesta)=> {
        return callback({state:true, datos:respuesta})
    })
    .catch((error)=>{
        return callback({state:false, datos:[], error:error, mensaje:"se presento un error al listar"})
    })
}

serviciosModel.Actualizar = function(post, callback){
    Mymodel.findOneAndUpdate({_id:post._id},{
        nombre:post.nombre,
        // precio:post.precio,
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

serviciosModel.Eliminar = function(post, callback){
    Mymodel.findOneAndDelete({_id:post._id}).then((respuesta)=>{
        console.log(respuesta)
        return callback({state:true, mensaje:"Elemento Eliminado"})
    }).catch((error)=>{
        return callback({state:false, mensaje:"Error al Eliminar", error:error})
    })
}


module.exports.serviciosModel = serviciosModel
config.origins = [
    "http://localhost:4200"
]
