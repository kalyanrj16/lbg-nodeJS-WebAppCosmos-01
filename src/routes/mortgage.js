const express = require('express');
const router = express.Router();
const { getMortgageData } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const data = await getMortgageData(req.query.database);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;