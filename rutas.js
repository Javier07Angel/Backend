
var SoloAdmin = function(request, response, next){
    if(request.session.rol == "1"){
        next()
    }
    else{
        response.json({state:false, mensaje:"Esta API es de uso exclusivo del Administrador"})
    }
}



var usuariosController = require('./api/controladores/usuariosController.js').usuariosController



app.post('/usuarios/Registro', function(request, response){
    usuariosController.Registro(request,response)
})

app.post('/usuarios/Guardar', function(request, response){
    usuariosController.Guardar(request,response)
})

app.post('/usuarios/Listar', function(request, response){
    usuariosController.Listar(request,response)
})


app.post('/usuarios/ListarId', function(request, response){
    usuariosController.ListarId(request,response)
})

app.post('/usuarios/Actualizar', function(request, response){
    usuariosController.Actualizar(request,response)
})

app.post('/usuarios/Eliminar', function(request, response){
    usuariosController.Eliminar(request,response)
})

app.post('/usuarios/Login', function(request, response){
    usuariosController.Login(request,response)
})

app.post('/usuarios/FiltroNombre', function(request, response){
    usuariosController.FiltroNombre(request,response)
})

app.post('/activar', function(request, response){
    usuariosController.Activar(request,response)
})

app.post('/usuarios/solicitarcodigo', function(request, response){
    usuariosController.solicitarcodigo(request,response)
})

app.post('/usuarios/recuperarpass', function(request, response){
    usuariosController.recuperarpass(request,response)
})

app.post('/status', function(request, response){
    response.json(request.session)
})

app.post('/logout', function(request, response){
    request.session.destroy()
    response.json({state:true, mensaje:"Se ha cerrado su Sesion Correctamente"})
})

app.get('/usuarios/ExportarExcel', function(request, response){
    usuariosController.ExportarExcel(request,response)
})



var productosController = require('./api/controladores/productosController.js').productosController





app.post('/productos/Guardar',SoloAdmin, function(request, response){
    productosController.Guardar(request,response)
})

app.post('/productos/Listar',SoloAdmin, function(request, response){
    productosController.Listar(request,response)
})

app.post('/productos/ListarProductosActivos', function(request, response){
    productosController.ListarProductosActivos(request,response)
})

app.post('/productos/ListarId', function(request, response){
    productosController.ListarId(request,response)
})

app.post('/productos/Actualizar',SoloAdmin, function(request, response){
    productosController.Actualizar(request,response)
})

app.post('/productos/Eliminar',SoloAdmin, function(request, response){
    productosController.Eliminar(request,response)
})








var serviciosController = require('./api/controladores/serviciosController.js').serviciosController





app.post('/servicios/Guardar', function(request, response){
    serviciosController.Guardar(request,response)
})

app.post('/servicios/Listar', function(request, response){
    serviciosController.Listar(request,response)
})

app.post('/servicios/ListarId', function(request, response){
    serviciosController.ListarId(request,response)
})

app.post('/servicios/Actualizar', function(request, response){
    serviciosController.Actualizar(request,response)
})

app.post('/servicios/Eliminar', function(request, response){
    serviciosController.Eliminar(request,response)
})

app.post('/servicios/ListarserviciosActivos', function(request, response){
    serviciosController.ListarserviciosActivos(request,response)
})

app.get('/servicios/ExportarExcel', function(request, response){
    serviciosController.ExportarExcel(request,response)
})



var archivosController = require('./api/controladores/archivosController.js').archivosController

app.post('/subirProductos/:nombre', function(request, response){
    archivosController.subirProductos(request,response)
})

app.post('/subirAvatar/:nombre', function(request, response){
    archivosController.subirAvatar(request,response)
})

app.post('/subirServicios/:nombre', function(request, response){
    archivosController.subirServicios(request,response)
})

app.post('/subirCarrusel/:nombre', function(request, response){
    archivosController.subirCarrusel(request,response)
})

app.post('/subirPerfil/:nombre', function(request, response){
    archivosController.subirPerfil(request,response)
})


var contratosController = require('./api/controladores/contratosController.js').contratosController





app.post('/contratos/Guardar', function(request, response){
    contratosController.Guardar(request,response)
})

app.post('/contratos/Listar', function(request, response){
    contratosController.Listar(request,response)
})

app.post('/contratos/ListarId', function(request, response){
    contratosController.ListarId(request,response)
})

app.post('/contratos/Actualizar', function(request, response){
    contratosController.Actualizar(request,response)
})

app.post('/contratos/Eliminar', function(request, response){
    contratosController.Eliminar(request,response)
})

app.post('/contratos/ListarcontratosActivos', function(request, response){
    contratosController.ListarcontratosActivos(request,response)
})

app.get('/contratos/ExportarExcel', function(request, response){
    contratosController.ExportarExcel(request,response)
})



var carruselController = require('./api/controladores/carruselController.js').carruselController





app.post('/carrusel/Guardar', function(request, response){
    carruselController.Guardar(request,response)
})

app.post('/carrusel/Listar', function(request, response){
    carruselController.Listar(request,response)
})

app.post('/carrusel/ListarId', function(request, response){
    carruselController.ListarId(request,response)
})

app.post('/carrusel/Actualizar', function(request, response){
    carruselController.Actualizar(request,response)
})

app.post('/carrusel/Eliminar', function(request, response){
    carruselController.Eliminar(request,response)
})

app.post('/carrusel/ListarcarruselActivos', function(request, response){
    carruselController.ListarcarruselActivos(request,response)
})




var perfilController = require('./api/controladores/perfilController.js').perfilController





app.post('/perfil/Guardar', function(request, response){
    perfilController.Guardar(request,response)
})

app.post('/perfil/Listar', function(request, response){
    perfilController.Listar(request,response)
})

app.post('/perfil/ListarId', function(request, response){
    perfilController.ListarId(request,response)
})

app.post('/perfil/Actualizar', function(request, response){
    perfilController.Actualizar(request,response)
})

app.post('/perfil/Eliminar', function(request, response){
    perfilController.Eliminar(request,response)
})

app.post('/perfil/ListarperfilActivos', function(request, response){
    perfilController.ListarperfilActivos(request,response)
})

app.get('/perfil/ExportarExcel', function(request, response){
    perfilController.ExportarExcel(request,response)
})
