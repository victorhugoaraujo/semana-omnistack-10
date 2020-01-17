const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-cu5vj.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Para o express entender o formato json
app.use(express.json());
app.use(routes);

app.listen(3333);