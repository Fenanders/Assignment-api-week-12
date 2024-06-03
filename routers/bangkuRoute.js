const express = require('express');
const router = express.Router();

router.get('/tambah-bangku', (req, res) => {
    res.send('tiket sudah dibeli');
});

router.get('/edit-bangku', (req, res) => {
    res.send('tiket sudah dibeli');
});

router.get('/delete-bangku', (req, res) => {
    res.send('tiket sudah dibeli');
});

module.exports = router;