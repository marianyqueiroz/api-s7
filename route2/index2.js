const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Filmes para assistir até enjoar!'
        
    });

});

module.exports = router;