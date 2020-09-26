const express = require('express');
const app2 = express();

const index2 = require('../route2/index2');
const filmes = require('../route2/filmesRoute');

app2.use((req, res, next) => {
    console.log('Nova requisição realizada');

    next();
});

app2.use('/', index2);
app2.use('/filmes', filmes);


module.exports = app2;