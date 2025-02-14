const express = require("express")
global.app = express()
const mongoose = require('mongoose')
const cors = require("cors")
global.config = require('./config.js').config

var bodyParser = require('body-parser')
const { config } = require("./config.js")
const session = require("express-session")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
global.SHA256 = require('sha256')






const cookieParser = require('cookie-parser')

global.json2xls = require('json2xls')
global.fs = require('fs')


global.path = require('path')
global.AppRoot = path.resolve(__dirname)


app.all('*',function(req, res, next){

    var whitelist = req.headers.origin;
    console.log(whitelist)
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");

    next();

});


mongoose.connect("mongodb://127.0.0.1:27017/" + config.bd).then((respuesta)=>{
    //se puede borrar console.log(respuesta)
    // console.log(respuesta)
    console.log("Conexion Correcta a Mongo")

}).catch((error)=> {
    console.log(error)
})

app.use(cors({
origin: function(origin, callback){
 console.log(origin)
        if(!origin) return callback(null,true)
            if(config.origins.indexOf(origin) === -1){
                return callback("error cors sin permisos", false)
            }
            else{
                return callback(null, true)
            }
    }
}))




app.use(cookieParser())
app.use(session({
    secret:config.sesiones.secret,
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:config.sesiones.expiracion, httpOnly:true
    },
    name:"CookieApp",
    rolling:true
}))


require('./rutas.js')

app.use('/Productos', express.static(__dirname + '/Productos'))

app.use('/Servicios', express.static(__dirname + '/Servicios'))

app.use('/Carrusel', express.static(__dirname + '/Carrusel'))

app.use('/Perfil', express.static(__dirname + '/Perfil'))

app.use('/Avatar', express.static(__dirname + '/Avatar'))

app.use('/', express.static(__dirname + '/pagina'))

app.listen(3000, function(){
    console.log("servidor funcionando por el puerto 3000")
})