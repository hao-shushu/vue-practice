'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var app = express();

var infos = [
	{
		 username: 'hao',
		 password: '123456'
	},
	{
		username: 'shu',
		password: '123456'
	},
	{
		username: 'xxx',
		password: '123456'
	}
];
// var router = express.Router();
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

app.post('/login', function(req, res){
	let info = req.body;
	let username = info.username;
	let password = info.password;

	let hasNoInfo = _.every(infos, (item)=>{
		if(item.username===username) {
			if(item.password===password) {
				return false;
			}
		}
		return true;
	});
	console.log(hasNoInfo);
	if(!hasNoInfo) {
		res.send(JSON.stringify({
			result: 1
		}));
	} else {
		res.send(JSON.stringify({
			result: 0
		}));
	}
});

// router.use(function(req, res, next) {
// 	console.log(req.method, req.url);
// 	next();
// });

// router.route('/login')
// 	.get(function(req, res){

// 	})
// 	.post(function(req, res) {
// 		// console.log(JSON.stringify(req.body, null, 4));
// 		// res.json({
// 		// 	"message": "yeah"
// 		// });
// 		console.log('1111');
// 	});

// app.get('/user', function(req, res){
// 	let query = req.query;
// 	let params = req.body;
// 	// '?' params after query sign
// 	console.log(JSON.stringify(query, null, 4));
// 	console.log(JONS.stringify(params, null, 4));
// 	res.setHeader('Content-Type', 'application/json');
// 	res.send(JSON.stringify({
// 		result: 1
// 	}));
// });

// app.get(/^\/users?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){
// 	// console.log(req.originalUrl);
// 	// console.log(req.baseUrl);
// 	// console.log(req.path);
//     res.send(req.params);
// });


app.get('/home.html', function(req, res){
	res.sendFile('home.html', {root: __dirname});
});

app.use(express.static(__dirname));
app.listen(3000);
console.log('Starting at http://localhost:3000/');
