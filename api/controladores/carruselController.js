const { response } = require('express')
var carruselModel = require('../modelos/carruselModel.js').carruselModel

var carruselController = {}



carruselController.Guardar = function(request, response){

    var post = {
        nombre:request.body.nombre,
        codigo:request.body.codigo,
        // // precio:request.body.precio,
        descripcion:request.body.descripcion,
        imagen:request.body.imagen,
        // // imagen1:request.body.imagen1,
        // // imagen2:request.body.imagen2,
        // estado:request.body.estado
    
       
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
    
    // if (post.imagen == undefined || post.imagen == null || post.imagen ==""){
    //     response.json({state:false, mensaje:"el campo imagen es obligatorio"})
    //     return false
    // }
    
    
    
    
    
    //modelo
    carruselModel.Existecodigo(post, function(res){
        if (res.existe== 'si'){
            response.json({state:false, mensaje:"el codigo ya existe"})
            return false
        }
        else{
            carruselModel.Guardar(post,function(respuesta){
                response.json(respuesta)
            })
        }
    })
    
    
    
    
    
    
    }
    
    carruselController.Listar = function(request, response){
        carruselModel.Listar(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    carruselController.ListarcarruselActivos = function(request, response){
        carruselModel.ListarcarruselActivos(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    carruselController.ListarId = function(request, response){
        var post = {
            _id:request.body._id
        }
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        carruselModel.ListarId(post, function(respuesta){
            response.json(respuesta)
        })
    }
    
    carruselController.Actualizar = function(request, response){
    
        var post = {
            _id:request.body._id,
            nombre:request.body.nombre,
            // // precio:request.body.precio,
            descripcion:request.body.descripcion,
            imagen:request.body.imagen,
            // // imagen1:request.body.imagen1,
            // // imagen2:request.body.imagen2,
            // estado:request.body.estado
        
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
        
        // if (post.imagen == undefined || post.imagen == null || post.imagen ==""){
        //     response.json({state:false, mensaje:"el campo imagen es obligatorio"})
        //     return false
        // }
         
        
        
        //modelo
       carruselModel.Actualizar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }
    
    
    carruselController.Eliminar = function(request, response){
    
        var post = {
            _id:request.body._id,
           
        
        }
        
       
        
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        
         
        
        
        //modelo
       carruselModel.Eliminar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }


module.exports.carruselController = carruselController