const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemapaciente = new eschema({
    nombre: String,
    apellido: String,
    telefono: String,
    idpaciente: String
})

const ModeloPaciente = mongoose.model('pacientes', eschemapaciente)

module.exports= {ModeloPaciente} 

//module.exports= {ModeloPaciente} 