//express
import express = require('express');
const router = express.Router();

//random data generator
import getRamdomData = require('../lib/ramdom');

router.get('/', function (req, res, next) {
  console.log('Obteniendo datos');
  res.json(getRamdomData());
});

export = router;
