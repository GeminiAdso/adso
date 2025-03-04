require('dotenv').config();
const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.Gemini}:${process.env.auronpoller31}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose.connect(URI);
module.exports = mongoose;
