const router = require('express').Router();
const User = require('../db').models.User;
const Office = require('../db').models.Office;

router.get('/', (req, res, next)=> {
	res.send("hello users");
})

router.post('/', (req, res, next)=> {
	res.send("post users");
})

router.delete('/:id', (req, res, next)=> {
	res.send("delete users");
})

router.put('/:id', (req, res, next)=> {
	res.send("put update users");
})

module.exports = router;