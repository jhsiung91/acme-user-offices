const router = require('express').Router();
const Office = require('../db').models.Office;

router.get('/', (req, res, next)=> {
  // res.send("hello offices");
  Office.findAll()
  .then((offices) =>{
  	res.send(offices)
  })
  .catch(next)
})

router.post('/', (req, res, next)=> {
  // res.send("post offices");
  Office.create(req.body)
  .then(office =>{
  	res.send(office)
  })
  .catch(next)
})

router.delete('/:id', (req, res, next)=> {
  let officeId = req.params.id
  Office.destroy(
  	{ where: {id: officeId} }
  )
  .then(office =>{
  	res.send("deleted office");
  })
  .catch(next)
})

module.exports = router;