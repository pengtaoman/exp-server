var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    user_ip    : String,
    user_phone : String,
    user_email : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );

mongoose.connect( 'mongodb://root:pt--11PT@127.0.0.1:27017/test', { useNewUrlParser: true });

// mongoose.connect( 'mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });
