//express
import express from 'express';
const router = express.Router();

//random data generator
import { getRamdomData } from '../lib/ramdom';

router.get('/', function (req, res) {
  console.log('Obteniendo datos');
  res.json(getRamdomData());
});

export = router;
