const mongoose = require('mongoose');


var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected')
})
//Define a schema
var Schema = mongoose.Schema;

var checkoutSchema = new Schema({
    a_string: String,
    a_date: Date
});