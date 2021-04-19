"use strict";
//express
const express = require("express");
const router = express.Router();
//random data generator
const getRamdomData = require("../lib/ramdom");
router.get('/', function (req, res, next) {
    console.log('Obteniendo datos');
    res.json(getRamdomData());
});
module.exports = router;
