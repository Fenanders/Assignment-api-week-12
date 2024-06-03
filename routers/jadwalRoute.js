const express = require('express');
const router = express.Router();
const jadwalController = require('../controllers/jadwalControllers')

router.get('/cek-jadwal', jadwalController.getAllJadwal);

// router.get('/tambah-jadwal', (req, res) => {

// });

// router.get('/edit-jadwal', (req, res) => {
    
// });

module.exports = router;