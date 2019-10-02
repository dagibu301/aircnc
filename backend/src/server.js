const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rocket:AFEOCuulIOfpf49R@rockseat-f0zcl.mongodb.net/Rocketseat?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);



app.listen(3333);

