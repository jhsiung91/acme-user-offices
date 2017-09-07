const router = require('express').Router();
const User = require('../db').models.User;
const Office = require('../db').models.Office;

router.get('/', (req, res, next)=> {
	// res.send("hello users");
	User.findAll()
	.then(users=>{
		res.send(users)
	})
	.catch(next)
})

router.post('/', (req, res, next)=> {
	// res.send("post users");
	User.create(res.body)
	.then(user =>{
		res.send(user)
	})
	.catch(next)
})

router.delete('/:id', (req, res, next)=> {
	let userId = req.params.id
	User.destroy({
		where: {id: userId}
	})
	.then(user =>{
		res.send("deleted user");
	})
	.catch(next)
})

router.put('/:id', (req, res, next)=> {
	// res.send("put update users");
})

module.exports = router;