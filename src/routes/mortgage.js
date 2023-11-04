const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const mortgageData = await db.getMortgageData();
  res.json(mortgageData);
});

module.exports = router;