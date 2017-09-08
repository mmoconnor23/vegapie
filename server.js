var express = require('express');
// var concatStream = require('concat-stream');
var mongo = require('mongodb');
var app = express();
var recipes;

//var mongoURI = process.ENV.MONGOLAB_URI;
var mongoURI = 'mongodb://heroku_6l4h524x:qqpf1r876ooc9515bnv1ng60hq@ds021434.mlab.com:21434/heroku_6l4h524x';
mongo.MongoClient.connect(mongoURI, function(err, db) {
	if (err) {
		throw err;
	}

	recipes = db.collection('recipes');
	console.log('connected to db');
	// recipes.insert([{
	// 	name: 'Melissa'
	// }], function(err, result) {
	// 	if (err) {
	// 		throw err;
	// 	}
	// });
});

//TODO: serve all the files!!!
app.use([
	express.static(__dirname + '/app'), 
	express.static(__dirname + '/node_modules')
]);

app.post('/addrecipe', function(req, res) {
	//add to database
	//return status code
	console.log(req.headers);
	var incomingRecipe = '';
	req.on('data', function(chunk) {
		incomingRecipe += chunk;
	});

	//TODO: instead, just post when it's been a success, promise chain on frontend will then fetch updates
	req.on('end', function() {
		recipes.insert([{
			data: incomingRecipe,
		}], function(err, result) {
			if (err) {
				throw err;
			}

			console.log('submitted a recipe!');
			console.log(result);
			res.send('200');//'[200]SUCCESS Add Recipe');
		});
	});
});

// var port = process.env.PORT;
var port = 5000;

app.listen(port, function() {
  console.log( 'server listening on port ' + port );
});