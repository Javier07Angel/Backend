const { response } = require('express')
var serviciosModel = require('../modelos/serviciosModel.js').serviciosModel

var serviciosController = {}

// serviciosController.Guardar = function(request, response){

// var post = {
//     nombre:request.body.nombre,
//     codigo:request.body.codigo,
   
// }

// if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
//     response.json({state:false, mensaje:"el campo nombre es obligatorio"})
//     return false
// }

// if (post.codigo == undefined || post.codigo == null || post.codigo ==""){
//     response.json({state:false, mensaje:"el campo codigo es obligatorio"})
//     return false
// }





// //modelo
// serviciosModel.Existecodigo(post, function(res){
//     if (res.existe== 'si'){
//         response.json({state:false, mensaje:"el codigo ya existe"})
//         return false
//     }
//     else{
//         serviciosModel.Guardar(post,function(respuesta){
//             response.json(respuesta)
//         })
//     }
// })






// }

// serviciosController.Listar = function(request, response){
//     serviciosModel.Listar(null, function(respuesta){
//         response.json(respuesta)
//     })
// }

// serviciosController.ListarId = function(request, response){
//     var post = {
//         _id:request.body._id
//     }
//     if (post._id == undefined || post._id == null || post._id ==""){
//         response.json({state:false, mensaje:"el campo _id es obligatorio"})
//         return false
//     }
//     serviciosModel.ListarId(post, function(respuesta){
//         response.json(respuesta)
//     })
// }

// serviciosController.Actualizar = function(request, response){

//     var post = {
//         _id:request.body._id,
//         nombre:request.body.nombre
    
//     }
    
//     if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
//         response.json({state:false, mensaje:"el campo nombre es obligatorio"})
//         return false
//     }
    
//     if (post._id == undefined || post._id == null || post._id ==""){
//         response.json({state:false, mensaje:"el campo _id es obligatorio"})
//         return false
//     }
    
     
    
    
//     //modelo
//    serviciosModel.Actualizar(post, function(respuesta){
//     response.json(respuesta)
//    })
    
//     }


// serviciosController.Eliminar = function(request, response){

//     var post = {
//         _id:request.body._id,
       
    
//     }
    
   
    
//     if (post._id == undefined || post._id == null || post._id ==""){
//         response.json({state:false, mensaje:"el campo _id es obligatorio"})
//         return false
//     }
    
     
    
    
//     //modelo
//    serviciosModel.Eliminar(post, function(respuesta){
//     response.json(respuesta)
//    })
    
//     }

// serviciosController.ListarserviciosActivos = function(request, response){
//         serviciosModel.ListarserviciosActivos(null, function(respuesta){
//             response.json(respuesta)
//         })
//     }

serviciosController.Guardar = function(request, response){

    var post = {
        nombre:request.body.nombre,
        codigo:request.body.codigo,
        // precio:request.body.precio,
        descripcion:request.body.descripcion,
        imagen:request.body.imagen,
        estado:request.body.estado
    
       
    }
    
    if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
        response.json({state:false, mensaje:"el campo nombre es obligatorio"})
        return false
    }
    
    if (post.codigo == undefined || post.codigo == null || post.codigo ==""){
        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    // if (post.precio == undefined || post.precio == null || post.precio ==""){
    //     response.json({state:false, mensaje:"el campo precio es obligatorio"})
    //     return false
    // }
    if (post.descripcion == undefined || post.descripcion == null || post.descripcion ==""){
        response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
        return false
    }
    
    if (post.estado == undefined || post.estado == null || post.estado ==""){
        response.json({state:false, mensaje:"el campo estado es obligatorio"})
        return false
    }
    
    
    
    
    
    //modelo
    serviciosModel.Existecodigo(post, function(res){
        if (res.existe== 'si'){
            response.json({state:false, mensaje:"el codigo ya existe"})
            return false
        }
        else{
            serviciosModel.Guardar(post,function(respuesta){
                response.json(respuesta)
            })
        }
    })
    
    
    
    
    
    
    }
    
    serviciosController.Listar = function(request, response){
        serviciosModel.Listar(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    serviciosController.ListarserviciosActivos = function(request, response){
        serviciosModel.ListarserviciosActivos(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    serviciosController.ListarId = function(request, response){
        var post = {
            _id:request.body._id
        }
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        serviciosModel.ListarId(post, function(respuesta){
            response.json(respuesta)
        })
    }
    
    serviciosController.Actualizar = function(request, response){
    
        var post = {
            _id:request.body._id,
            nombre:request.body.nombre,
            // precio:request.body.precio,
            descripcion:request.body.descripcion,
            imagen:request.body.imagen,
            estado:request.body.estado
        
        }
        
        if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
            response.json({state:false, mensaje:"el campo nombre es obligatorio"})
            return false
        }
        
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
    
        // if (post.precio == undefined || post.precio == null || post.precio ==""){
        //     response.json({state:false, mensaje:"el campo precio es obligatorio"})
        //     return false
        // }
        if (post.descripcion == undefined || post.descripcion == null || post.descripcion ==""){
            response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
            return false
        }
        
        if (post.estado == undefined || post.estado == null || post.estado ==""){
            response.json({state:false, mensaje:"el campo estado es obligatorio"})
            return false
        }
         
        
        
        //modelo
       serviciosModel.Actualizar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }
    
    
    serviciosController.Eliminar = function(request, response){
    
        var post = {
            _id:request.body._id,
           
        
        }
        
       
        
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        
         
        
        
        //modelo
       serviciosModel.Eliminar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }

serviciosController.ExportarExcel = function(request, response){

            serviciosModel.Listar(null, function(respuesta){
        
                const dataToExport = respuesta.datos.map(doc => doc._doc);
                
                
                
                var xls = json2xls(dataToExport)
                fs.writeFileSync('miservicios.xls', xls, 'binary')
                response.download('miservicoios.xls', function(err){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log('Descarga Completa')
                        // fs.unlinkSyn('miusuario.xls')
                    }
                })
        
        
            })
        }

module.exports.serviciosController = serviciosController