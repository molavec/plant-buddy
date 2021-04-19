import express = require('express');
const router = express.Router();

const data = [
  { date: '20214014 10:00:00', temp: 400, h: 2400, ph: 1400 },
  { date: '20214014 11:00:00', temp: 350, h: 1500, ph: 2200 },
  { date: '20214014 12:00:00', temp: 320, h: 200, ph: 200 },
  { date: '20214014 13:00:00', temp: 280, h: 1350, ph: 400 },
  { date: '20214014 14:00:00', temp: 390, h: 2000, ph: 800 },
  { date: '20214014 15:00:00', temp: 350, h: 1600, ph: 900 },
];

router.get('/', function (req, res, next) {
  res.json(data);
});

export = router;
