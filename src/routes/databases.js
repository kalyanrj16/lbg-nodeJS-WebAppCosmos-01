const express = require('express');
const router = express.Router();
const yaml = require('js-yaml');
const fs = require('fs');

router.get('/', async (req, res, next) => {
  try {
    const file = fs.readFileSync('./config.yml', 'utf8');
    const config = yaml.load(file);
    res.json(config.databases);
  } catch (e) {
    next(e);
  }
});

module.exports = router;