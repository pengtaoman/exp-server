var compression = require('compression')
var express = require('express')
var http    = require( 'http' );
var bodyParser = require('body-parser')
var mongoose = require( 'mongoose' );

require( './db/db' );
var Todo     = mongoose.model( 'Todo' );

var jsonParser = bodyParser.json()
var app     = express();
app.set( 'port', process.env.PORT || 3001 );
app.set('trust proxy', 'loopback');

app.get('/', (req, res) => res.send('Hello World!?????----'))

app.post('/exp/todo', jsonParser, (req, res) => {
  var Todo     = mongoose.model( 'Todo' );
  console.log('###########' + JSON.stringify(req.body));
  console.log(JSON.stringify(req.ip));
  var reqdata = req.body;
  new Todo({
    content    : reqdata.message,
    user_phone : reqdata.phone,
    user_email : reqdata.email,
    user_ip    : req.ip,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    console.log(err);
    console.log(JSON.stringify(todo));
    console.log(count);
    res.json({ code: '200' });
  });
})

http.createServer( app ).listen( app.get( 'port' ), function(){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
} );



// app.get('/', (req, res) => res.send('Hello World!?????----'))
// app.get('/wxn/', (req, res) => res.send('Hello World WNX!'))
// app.listen(3000, () => console.log('Example app listening on port 3000!'))
