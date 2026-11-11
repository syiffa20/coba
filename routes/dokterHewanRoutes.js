const express = require('express');
const { buatDokter, lihatSemuaDokter } = require('../controllers/dokterHewanController');

const router = express.Router();

router.post('/', buatDokter);
router.get('/', lihatSemuaDokter);

module.exports = router;
