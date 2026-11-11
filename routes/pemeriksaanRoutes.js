const express = require('express');
const {
  buatPemeriksaan,
  lihatSemuaPemeriksaan,
} = require('../controllers/pemeriksaanController');

const router = express.Router();

router.post('/', buatPemeriksaan);
router.get('/', lihatSemuaPemeriksaan);

module.exports = router;
