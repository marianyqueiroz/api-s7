const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: 'Bandas que precisam ser conhecidas!'
        
    });

});

module.exports = router;