const bandas = require('../model/bandas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(bandas);
};

module.exports = { getAll };