const mongoose = require('mongoose');

const InstrumentosSchema = new mongoose.Schema(
    {    
        nombre:{
            type: String,
            require: true
        },
        precio:{
            type: Number,
            default: '0'
        },
        tipos: {   type: mongoose.Types.ObjectId
            //type: Array,
            //default: []
        }
    });

    const Instrumentos = new mongoose.model('instrumentos',InstrumentosSchema);

    module.exports= {Instrumentos} 