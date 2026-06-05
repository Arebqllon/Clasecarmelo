const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    nombre: { type: String, 
        required: [true, 'Campo obligatorio']
    },
    descripcion: { type: String },
    duracionMinutos: { type: Number, 
        required: [true, 'Campo obligatorio'] 
    },
    precio: { type: Number, 
        required: [true, 'Campo obligatorio']
    },
    categoria: { type: String, enum: ['corte', 'tintura', 'peinado', 'tratamiento', 'barberia', 'otros'],
        required: [true, 'Campo obligatorio']
    } 
  });


module.exports = mongoose.model('ServicioPeluqueria', servicioSchema)

