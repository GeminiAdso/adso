const exp = require('express');
require('dotenv').config
const app = exp();

app.get('/productos', async (req,res)=>{
    let listaProductos = await modeloProducto.find();
    if (listaProductos) {
        res.status(200).json(listaProductos)
    }else{
        res.status(500).json({error})
    }
});

app.get('/productos/.ref', async (req,res)=>{
    let listaProductos = await modeloProducto.find({"referencia":req.params.ref});
    if (listaProductos) {
        res.status(200).json(listaProductos)
    }else{
        res.status(500).json({error})
    }
});

app.listen(process.env.PORT, ()=>{
    console.log('aplicacion corriendo en puerto'+ process.env.PORT) 
});