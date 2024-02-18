// define and imported mongoose for model
const mongoose = require('mongoose');

// created todo schema here
const todoSchema = new mongoose.Schema({
    description : {
        type: String,
        required : true
    },
    category : {
        type: String,
    },
    dueDate : {
        type: Date,
        required : true
    }
})

// define and exported our model schema as todolist
const ToDoList = mongoose.model('ToDoList', todoSchema);
module.exports = ToDoList; 