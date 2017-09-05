const express = require('express')
const bodyparser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
const nunjucks = require('nunjucks')
const users = require('./routes/users')
const offices = require('./routes/offices');
const conn = require('./db')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const app = express();

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

app.use('/vendors', express.static(path.join(__dirname, 'node_moduels')))
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}))

app.get('/',(req,res,next)=>{
	res.render('index')
})
app.use('/users', users);
app.use('/offices', offices);

app.listen(port, ()=>{
	console.log(`listening on port ${port}`)
})