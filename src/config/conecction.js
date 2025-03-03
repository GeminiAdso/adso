require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' Conectado a MongoDB Atlas'))
.catch(err => console.error(' Error al conectar a MongoDB:', err));
