const Pemeriksaan = require('../models/Pemeriksaan');

async function buatPemeriksaan(req, res) {
  const {
    kodePemeriksaan,
    namaHewan,
    umurBulan,
    statusPemeriksaan,
    dataHewan,
    dokter,
  } = req.body || {};

  const dataHewanYangDiterima = dataHewan && {
    jenisHewan: dataHewan.jenisHewan,
    ras: dataHewan.ras,
  };

  const pemeriksaan = await Pemeriksaan.create({
    kodePemeriksaan,
    namaHewan,
    umurBulan,
    statusPemeriksaan,
    dataHewan: dataHewanYangDiterima,
    dokter,
  });

  res.status(201).json(pemeriksaan);
}

async function lihatSemuaPemeriksaan(req, res) {
  const filter = {};
  if (req.query.statusPemeriksaan !== undefined) {
    if (typeof req.query.statusPemeriksaan !== 'string') {
      const error = new Error('Filter status pemeriksaan tidak valid');
      error.statusCode = 400;
      throw error;
    }
    filter.statusPemeriksaan = req.query.statusPemeriksaan;
  }

  const pemeriksaan = await Pemeriksaan.find(filter)
    .select('_id kodePemeriksaan namaHewan umurBulan statusPemeriksaan');

  res.status(200).json(pemeriksaan);
}

async function lihatPemeriksaanBerdasarkanId(req, res) {
  const pemeriksaan = await Pemeriksaan.findById(req.params.id)
    .populate('dokter', 'kode nama');

  if (!pemeriksaan) {
    const error = new Error('Data pemeriksaan tidak ditemukan');
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json(pemeriksaan);
}

module.exports = {
  buatPemeriksaan,
  lihatSemuaPemeriksaan,
  lihatPemeriksaanBerdasarkanId,
};
