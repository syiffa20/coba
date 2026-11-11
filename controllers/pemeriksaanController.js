const Pemeriksaan = require('../models/Pemeriksaan');

async function buatPemeriksaan(req, res) {
  const {
    kodePemeriksaan,
    namaHewan,
    umurBulan,
    statusPemeriksaan,
    dataHewan,
    dokter,
  } = req.body;

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
  const pemeriksaan = await Pemeriksaan.find();
  res.status(200).json(pemeriksaan);
}

module.exports = { buatPemeriksaan, lihatSemuaPemeriksaan };
