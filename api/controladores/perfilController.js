const { response } = require('express')
var perfilModel = require('../modelos/perfilModel.js').perfilModel

var perfilController = {}



perfilController.Guardar = function(request, response){

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
    perfilModel.Existecodigo(post, function(res){
        if (res.existe== 'si'){
            response.json({state:false, mensaje:"el codigo ya existe"})
            return false
        }
        else{
            perfilModel.Guardar(post,function(respuesta){
                response.json(respuesta)
            })
        }
    })
    
    
    
    
    
    
    }
    
    perfilController.Listar = function(request, response){
        perfilModel.Listar(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    perfilController.ListarperfilActivos = function(request, response){
        perfilModel.ListarperfilActivos(null, function(respuesta){
            response.json(respuesta)
        })
    }
    
    perfilController.ListarId = function(request, response){
        var post = {
            _id:request.body._id
        }
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        perfilModel.ListarId(post, function(respuesta){
            response.json(respuesta)
        })
    }
    
    perfilController.Actualizar = function(request, response){
    
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
       perfilModel.Actualizar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }
    
    
    perfilController.Eliminar = function(request, response){
    
        var post = {
            _id:request.body._id,
           
        
        }
        
       
        
        if (post._id == undefined || post._id == null || post._id ==""){
            response.json({state:false, mensaje:"el campo _id es obligatorio"})
            return false
        }
        
         
        
        
        //modelo
       perfilModel.Eliminar(post, function(respuesta){
        response.json(respuesta)
       })
        
        }

perfilController.ExportarExcel = function(request, response){

            perfilModel.Listar(null, function(respuesta){
        
                const dataToExport = respuesta.datos.map(doc => doc._doc);
                
                
                
                var xls = json2xls(dataToExport)
                fs.writeFileSync('miperfil.xls', xls, 'binary')
                response.download('misperfiles.xls', function(err){
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

module.exports.perfilController = perfilController