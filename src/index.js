const express= require('express');
const app = express();
const mongoose = require('mongoose');

const {ModeloPaciente} = require('./models/Paciente');
const {Tipos}= require('./models/TipoIns');
const {Instrumentos}= require('./models/Instrumento');

const rutapaciente =  require('./routes/PacienteRoutes');
const instrumentosRouter = require('./routes/instrumentosRoutes');
const tiposRouter = require('./routes/tiposRoutes'); 

const PORT = 5000; // localhost
const MONGO_URI = 'mongodb://0.0.0.0:27017/log'; 
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//imp body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


//middlewares
app.use(express.json());



//rutas
app.use('/api/paciente',rutapaciente);
app.use(rutapaciente);
app.use('/api/instrumento',instrumentosRouter);
app.use(instrumentosRouter);
app.use(tiposRouter);

const crearPaciente = () =>{
    ModeloPaciente.create(
      {
        nombre:'Sebastian',
        apellido:'Puebla',
        telefono:'2614389735'
      }
    )
}  

const crearTipoIns = () =>{
  Tipos.create(
    {
      nombre:'Viento',
      descripcion:'los de viento son....'
    }
  )
}

const crearInstrumento = () =>{
   Instrumentos.create(
   {
   // nombre:'Guitarra',
   // precio:'40000',
   // tipos: mongoose.Types.ObjectId("6445ac4a3d646bcbb24fdaed")  
      //nombre:'Flauta',
      //precio:'3500',
      //tipos: mongoose.Types.ObjectId("6445ad07f587de08f56bf805") 
   }
  )
 
}

app.get('/', (req,res) => {
    res.send('Bienvenido al servidor backend') 
 })



 //crearPaciente();
//crearTipoIns();
//crearInstrumento();

//iniciar app
app.listen(PORT, () => console.log(`Iniciando  app en puerto ${PORT}`));