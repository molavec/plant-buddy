/*eslint no-restricted-modules: ["error", "express"]*/
import express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

export = router;
