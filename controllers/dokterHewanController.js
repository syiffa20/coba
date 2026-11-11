const DokterHewan = require('../models/DokterHewan');

async function buatDokter(req, res) {
  const { kode, nama } = req.body;
  const dokter = await DokterHewan.create({ kode, nama });
  res.status(201).json(dokter);
}

async function lihatSemuaDokter(req, res) {
  const dokter = await DokterHewan.find();
  res.status(200).json(dokter);
}

module.exports = { buatDokter, lihatSemuaDokter };
