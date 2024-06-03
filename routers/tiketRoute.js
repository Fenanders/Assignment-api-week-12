const express = require('express');
const router = express.Router();

router.get('/beli-tiket', (req, res) => {
    res.send('tiket sudah dibeli');
});

router.get('/cek-tiket', (req, res) => {

});

router.get('/verifikasi-tiket', (req, res) => {
    
});

module.exports = router;