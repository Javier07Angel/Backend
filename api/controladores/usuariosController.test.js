const { test, beforeEach} = require('test')
const request = require('supertest')
const mongoose =require('mongoose')
const config = require('../../config.js').config


var Mymodel = require('../modelos/usuariosModel.js').Mymodel

jest.setTimeout(30000);

describe('Grupo de Testing para API usuarios', (done) => {

    beforeAll(async () => {
        //antes de cada prueba
       await mongoose.connect("mongodb://127.0.0.1:27017/" + config.bd).then((respuesta)=>{
     
        }).catch((error)=> {
            console.log(error)
        })

    })

    //corre al terminar todos los test
    afterAll(async() =>{

        // borrar coleccion
        await Mymodel. findOneAndDelete({})

    });

//Usuarios Registrar
    
    it('Registrar Usuarios sin nombre debe fallar', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({apellido: 'Angel', email:'javier07angel@gmail.com', password:'123456'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:false, mensaje:"el campo nombre es obligatorio"})
            done()
        })
    } )

    it('Registrar Usuarios sin apellido debe fallar', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({nombre:'Javier Angel', email:'javier07angel@gmail.com', password:'123456'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:false, mensaje:"el campo apellido es obligatorio"})
            done()
        })
    } )

    it('Registrar Usuarios sin email debe fallar', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({nombre:'Javier Angel', apellido: 'Angel', password:'123456'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:false, mensaje:"el campo email es obligatorio"})
            done()
        })
    } )

    it('Registrar Usuarios sin password debe fallar', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({nombre:'Javier Angel', apellido: 'Angel', email:'javier07angel@gmail.com'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:false, mensaje:"el campo password es obligatorio"})
            done()
        })
    } )

    it('Registrar Usuarios con todos los datos es correcto', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({nombre:'Javier Angel', apellido: 'Angel', email:'javier07angel@gmail.com', password:'123456'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:true, mensaje:"usuario Guardado"})
            done()
        })
    } )

    it('Registrar Usuarios con todos los datos falla si ya esiste ', (done) => {
        
        request('http://localhost:3000')
        .post('/usuarios/Registro')
        .send({nombre:'Javier Angel', apellido: 'Angel', email:'javier07angel@gmail.com', password:'123456'})
        .then(response => {
            console.log(response.body)
            expect(response.body).toEqual({state:false, mensaje:"el email ya existe"})
            done()
        })
    } )
//eliminar
    it('Debe Eliminar un usuario ', (done) => {

        Mymodel.findOne({email:'javier07angel@gmail.com'}).then((respuesta) =>{
            console.log(respuesta._id)
       
        
        request('http://localhost:3000')
        .post('/usuarios/Eliminar')
        .send({_id:respuesta._id})
        .then(response => {
            
            expect(response.body).toEqual({state:true, mensaje:"Elemento Eliminado"})
            done()
        })
    })
    } )

//Usuarios Guardar
it('Guardar Usuarios sin nombre debe fallar', (done) => {
        
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({ apellido: 'Angel', email:'victor02angel@gmail.com', password:'123456', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo nombre es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios sin apellido debe fallar', (done) => {
        
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({ nombre:'Victor', email:'victor02angel@gmail.com', password:'123456', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo apellido es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios sin email debe fallar', (done) => {
    
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', password:'123456', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo email es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios sin password debe fallar', (done) => {
    
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', email:'victor02angel@gmail.com', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo password es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios sin rol debe fallar', (done) => {
        
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', email:'victor02angel@gmail.com', password:'123456', estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo rol es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios sin estado debe fallar', (done) => {
        
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', email:'victor02angel@gmail.com', password:'123456', rol:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el campo estado es obligatorio"})
        done()
    })
} )

it('Guardar Usuarios con todos los datos es correcto', (done) => {
    
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', email:'victor02angel@gmail.com', password:'123456', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:true, mensaje:"usuario Guardado"})
        done()
    })
} )

it('Guardar Usuarios con todos los datos falla si ya esiste ', (done) => {
    
    request('http://localhost:3000')
    .post('/usuarios/Guardar')
    .send({nombre:'Victor', apellido: 'Angel', email:'victor02angel@gmail.com', password:'123456', rol:1, estado:1})
    .then(response => {
        console.log(response.body)
        expect(response.body).toEqual({state:false, mensaje:"el email ya existe"})
        done()
    })
} )





})