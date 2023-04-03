const express = require('express');
const messages = require('../DB');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('form', {
    title: 'Form',
  });
});

router.post('/', (req, res, next) => {
  console.log('FORM____________________________');
  const { text, user } = req.body;
  messages.push(
    {
      user,
      text,
      added: new Date(),
    },
  );
  res.redirect('/');
});

module.exports = router;
