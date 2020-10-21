const express = require('express');
const app = express();

const index = require('../route/index');
const bandas = require('../route/bandasRoute');

app.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
});

app.use('/', index);
app.use('/bandas', bandas);


module.exports = app;