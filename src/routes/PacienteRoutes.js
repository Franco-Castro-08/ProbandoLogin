const express = require('express');
const router = express.Router();
const { ModeloPaciente } = require('../models/Paciente');

//ruta de prueba
/*
router.get('/ejemplo',(req,res) =>{
   res.send('saludo desde la ruta ejemplo')
})
*/



//agregar paciente
router.post('/agregarpaciente', (req,res) =>{
  const nuevopaciente = new ModeloPaciente({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      idpaciente: req.body.idpaciente
  })
  nuevopaciente.save(function(err){
      if (!err) {
          res.send('Paciente agregado correctamente')
      }else{
          res.send(err)
      }
  })
})

//obtener todos los pacientes
router.get('/obtenerpacientes', (req, res) =>{
  ModeloPaciente.find({}, function(docs, err){
   if (!err) {
       res.send(docs)
   }else{
       res.send(err)
   }
})
})






//obtener data de pacientes
router.post('/obtenerdatapaciente', (req, res) =>{
  ModeloPaciente.find({idpaciente:req.body.idpaciente}, function(docs, err){
   if (!err) {
       res.send(docs)
   }else{
       res.send(err)
   }
})
})


//actualizar paciente
      //put
router.post('/actualizapaciente', (req,res) =>{
  
  ModeloPaciente.findOneAndUpdate({idpaciente: req.body.idpaciente}, {

      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono
  }, (err) => {
      if (!err) {
         res.send('Paciente actualizado correctamente')            
      } else {
          res.send(err)
      }
  })
})


//borrar paciente
    // delete  
router.post('/borrarpaciente', (req,res) =>{
  
  ModeloPaciente.findOneAndDelete({idpaciente: req.body.idpaciente}, (err) =>{
      if (!err) {
          res.send('Paciente borrado correctamente')            
       } else {
           res.send(err)
       }  
      })
  })
  

  module.exports = router