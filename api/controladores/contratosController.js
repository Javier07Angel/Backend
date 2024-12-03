const { response } = require('express')
var contratosModel = require('../modelos/contratosModel.js').contratosModel

var contratosController = {}



contratosController.Guardar = function(request, response){

    var post = {
        nombre:request.body.nombre,
        codigo:request.body.codigo,
        precio:request.body.precio,
        descripcion:request.body.descripcion,
        // imagen:request.body.imagen,
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
    if (post.precio == undefined || post.precio == null || post.precio ==""){
        response.json({state:false, mensaje:"el campo precio es obligatorio"})
        return false
    }
    if (post.descripcion == undefined || post.descripcion == null || post.descripcion ==""){
        response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
        return false
    }
    
    if (post.estado == undefined || post.estado == null || post.estado ==""){
        response.json({state:false, mensaje:"el campo estado es obligatorio"})
        return false
    }
    
    
    
    
    
    //modelo
    contratosModel.Existecodigo(post, function(res){
        if (res.existe== 'si'){
            response.json({state:false, mensaje:"el codigo ya existe"})
            return false
        }
        else{
            contratosModel.Guardar(post,function(respuesta){
                response.json(respuesta)
            })
        }
    })
    
    
    
    
    
    
    }
    
    contratosController.Listar = function(request, response){
        contratosModel.Listar(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    contratosController.ListarcontratosActivos = function(request, response){
        contratosModel.ListarcontratosActivos(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    contratosController.ListarId = function(request, response){
        var post = {
            _id:request.body._id
        }
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        contratosModel.ListarId(post, function(respuesta){
            response.json(respuesta)
        })
    }
    
    contratosController.Actualizar = function(request, response){
    
        var post = {
            _id:request.body._id,
            nombre:request.body.nombre,
            precio:request.body.precio,
            descripcion:request.body.descripcion,
            // imagen:request.body.imagen,
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
    
        if (post.precio == undefined || post.precio == null || post.precio ==""){
            response.json({state:false, mensaje:"el campo precio es obligatorio"})
            return false
        }
        if (post.descripcion == undefined || post.descripcion == null || post.descripcion ==""){
            response.json({state:false, mensaje:"el campo descripcion es obligatorio"})
            return false
        }
        
        if (post.estado == undefined || post.estado == null || post.estado ==""){
            response.json({state:false, mensaje:"el campo estado es obligatorio"})
            return false
        }
         
        
        
        //modelo
       contratosModel.Actualizar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }
    
    
    contratosController.Eliminar = function(request, response){
    
        var post = {
            _id:request.body._id,
           
        
        }
        
       
        
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        
         
        
        
        //modelo
       contratosModel.Eliminar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }

contratosController.ExportarExcel = function(request, response){

            contratosModel.Listar(null, function(respuesta){
        
                const dataToExport = respuesta.datos.map(doc => doc._doc);
                
                
                
                var xls = json2xls(dataToExport)
                fs.writeFileSync('miscontratos.xls', xls, 'binary')
                response.download('miscontratos.xls', function(err){
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


module.exports.contratosController = contratosController