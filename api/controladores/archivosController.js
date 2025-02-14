var archivosController = {}
var multer = require('multer')

archivosController.subirProductos = function(request, response){

var post = {
    nombre:request.params.nombre
}


var upload = multer({
    storage:multer.diskStorage({
        destination:(req,file, cb)=>{
            cb(null, AppRoot + "/Productos")
        },
        filename:(req, file, cb)=>{
            cb(null, post.nombre + '.png')
        }
    })
}).single("userFile")

upload(request, response,function(err){
    if(err){
        console.log(err)
        response.json(err)
    }
    else{
        response.json({state:true})
    }
})

}

archivosController.subirAvatar = function(request, response){

    var post = {
        nombre:request.params.nombre
    }
    
    
    var upload = multer({
        storage:multer.diskStorage({
            destination:(req,file, cb)=>{
                cb(null, AppRoot + "/Avatar")
            },
            filename:(req, file, cb)=>{
                cb(null, post.nombre + '.png')
            }
        })
    }).single("userFile")
    
    upload(request, response,function(err){
        if(err){
            console.log(err)
            response.json(err)
        }
        else{
            response.json({state:true})
        }
    })
    
    }

archivosController.subirServicios = function(request, response){

        var post = {
            nombre:request.params.nombre
        }
        
        
        var upload = multer({
            storage:multer.diskStorage({
                destination:(req,file, cb)=>{
                    cb(null, AppRoot + "/Servicios")
                },
                filename:(req, file, cb)=>{
                    cb(null, post.nombre + '.png')
                }
            })
        }).single("userFile")
        
        upload(request, response,function(err){
            if(err){
                console.log(err)
                response.json(err)
            }
            else{
                response.json({state:true})
            }
        })
        
        }

archivosController.subirCarrusel = function(request, response){

            var post = {
                nombre:request.params.nombre
            }
            
            
            var upload = multer({
                storage:multer.diskStorage({
                    destination:(req,file, cb)=>{
                        cb(null, AppRoot + "/Carrusel")
                    },
                    filename:(req, file, cb)=>{
                        cb(null, post.nombre + '.png')
                    }
                })
            }).single("userFile")
            
            upload(request, response,function(err){
                if(err){
                    console.log(err)
                    response.json(err)
                }
                else{
                    response.json({state:true})
                }
            })
            
            }


archivosController.subirPerfil = function(request, response){

                var post = {
                    nombre:request.params.nombre
                }
                
                
                var upload = multer({
                    storage:multer.diskStorage({
                        destination:(req,file, cb)=>{
                            cb(null, AppRoot + "/Perfil")
                        },
                        filename:(req, file, cb)=>{
                            cb(null, post.nombre + '.png')
                        }
                    })
                }).single("userFile")
                
                upload(request, response,function(err){
                    if(err){
                        console.log(err)
                        response.json(err)
                    }
                    else{
                        response.json({state:true})
                    }
                })
                
                }

                
module.exports.archivosController = archivosController