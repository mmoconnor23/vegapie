var express = require('express');
// var concatStream = require('concat-stream');
var mongo = require('mongodb');
var server = express();

var mongoURI = process.ENV.MONGOLAB_URI;//'mongodb://heroku_6l4h524x:qqpf1r876ooc9515bnv1ng60hq@ds021434.mlab.com:21434/heroku_6l4h524x';

mongo.MongoClient.connect(mongoURI, function(err, db) {
	if (err) {
		throw err;
	}

	var recipes = db.collection('recipes');
	recipes.insert([{
		name: 'Vegetarian Chili'
	}], function(err, result) {
		if (err) {
			throw err;
		}
	});
});

//TODO: serve all the files!!!
server.use([
	express.static(__dirname + '/app'), 
	express.static(__dirname + '/node_modules')
]);

server.post('/addrecipe', function(req, res) {
	//add to database
	//return status code
	console.log(req.body);
	res.send('[200]SUCCESS Add Recipe ');
});

var port = process.env.PORT;
// var port = 5000;

server.listen(port, function() {
  console.log( 'server listening on port ' + port );
});