const express = require('express');
const {
  buatPemeriksaan,
  lihatSemuaPemeriksaan,
  lihatPemeriksaanBerdasarkanId,
} = require('../controllers/pemeriksaanController');

const router = express.Router();

router.post('/', buatPemeriksaan);
router.get('/', lihatSemuaPemeriksaan);
router.get('/:id', lihatPemeriksaanBerdasarkanId);

module.exports = router;
