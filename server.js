var express = require( 'express' );
var server = express();

server.use( express.static( __dirname + '/app' ) );

var port = process.env.PORT;

server.listen( port, function() {
  console.log( 'server listening on port ' + port );
});