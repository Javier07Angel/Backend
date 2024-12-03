var Registrar = function(){

var nombre = document.getElementById('nombre').value
var email = document.getElementById('email').value
var pass = document.getElementById('pass').value

var data = `nombre=${nombre}&email=${email}&password=${pass}`;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
   var respuesta = JSON.parse(this.responseText);
   if(respuesta.state == true){
        crearmensaje('success', respuesta.mensaje)
   }
   else{
    crearmensaje('danger', respuesta.mensaje)
   }
  }
});

xhr.open("POST", "http://localhost:3000/usuarios/Guardar");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);
}

var crearmensaje = function(color,mensaje){
    var mismensajes = document.getElementById('mismensajes')
    mismensajes.innerHTML = mismensajes.innerHTML + `<div class="alert alert-${color}" role="alert">
                                                         ${mensaje}
                                                            </div>`
}

var validar = function(){
    var post = {
    nombre : document.getElementById('nombre').value,
    email : document.getElementById('email').value,
    pass : document.getElementById('pass').value   
}

if (post.nombre == undefined || post.nombre == null || post.nombre ==""){
    crearmensaje("danger", "el campo nombre es obligatorio")
    return false
}

if (post.email == undefined || post.email == null || post.email ==""){
    crearmensaje("danger", "el campo email es obligatorio")
    return false
}


if (post.pass == undefined || post.pass == null || post.pass ==""){
    crearmensaje("danger", "el campo password es obligatorio")
    return false
}

Registrar()

}