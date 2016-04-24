var express = require( 'express' );
var server = express();
// var client = require('redis')
				// .createClient(process.env.REDIS_URL);

server.use( express.static( __dirname + '/app' ) );

// var port = process.env.PORT;
var port = 5000;

server.listen( port, function() {
  console.log( 'server listening on port ' + port );
});