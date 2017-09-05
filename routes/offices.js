const router = require('express').Router();
const Office = require('../db').models.Office;

router.get('/', (req, res, next)=> {
  res.send("hello offices");
})

router.post('/', (req, res, next)=> {
  res.send("post offices");
})

router.delete('/:id', (req, res, next)=> {
  res.send("delete offices");
})

module.exports = router;