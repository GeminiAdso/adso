
const mongoose = require('../src/config/conecction');
const schemaProducto = new mongoose.Schema({
    referencia: {
        type: [Number, "la referencia debe de ser numerica"],
        required: [true,"la referencia es obligatoria"]
    },
    nombre: {
        type: [String, "el nombre debe de ser alfanumerico"],
        required: [true,"el nombre es obligatorio"]
    },
    precio: {
        type: [Decimal, "el precio debe de ser numerico"],
    },
},{versionKey: false});

const modeloProducto = mongoose.model("producto", schemaProducto);
module.exports = modeloProducto;