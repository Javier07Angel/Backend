var config = {
    email:{},
    sesiones:{}
}

config.urlreal = 'http://localhost:3000'
config.puerto = 3000
config.email.host = "smtp.gmail.com"
config.email.port = 587
config.email.user = "pruebabootcamp1@gmail.com"
config.email.pass = "ynchupvjalhrzlnq"

config.sesiones.secret = "angel"
config.sesiones.expiracion = 60000*5

config.bd = "PRUEBA"
config.palabraclave = "hjggcgfdedtjkhjhghfgrymmnbbvce4568opawqdsg"
config.origins = [
    "http://localhost:4200",
    "http://localhost:3000",
    "http://localhost:9876"
]
module.exports.config = config