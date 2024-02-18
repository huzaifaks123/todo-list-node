// define and imported mongoose for model
const mongoose = require('mongoose');

// connect our database to localhost
mongoose.connect('mongodb://localhost/todo_list_db')

// define database connection as db
const db = mongoose.connection;

// check if database is connected
db.on('error', console.error.bind(console, 'Error on connecting to db'))
db.once('open', function () {
    console.log('connected to db successfully')
})