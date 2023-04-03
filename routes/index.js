const express = require('express');
const messages = require('../DB');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    messages,
    title: 'Mini Messages',
  });
});

router.post('/', (req, res, next) => {
  console.log('INDEX___________________________');
  res.redirect('/new');
});

module.exports = router;
