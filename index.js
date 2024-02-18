// define express framewrok here
const express = require('express');

// define path and port for our localhost
const path = require('path')
const port = 8000;

// define and import todolist models
const ToDoList = require('./models/todoList')

// define database and import from config
const db = require('./config/mongoose')

// define our app here
const app = express();

// sets view and and its directory
app.set('view engine', 'ejs')
app.set('views', './views')

// used middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));

// call fetch function here
app.get('/', function (req, res) {
    ToDoList.find({})
        .then(ToDo => {
    return res.render('home', {
        todo_list: ToDo,
    });
    })
    .catch(err => {
        console.log(`error while loading data from db : ${err}`);
        return res.status(500).send('Internal Server Error')
    });
});

// call add function here
app.post('/add-todo', function (req, res) {
    ToDoList.create(req.body)
        .then(newToDo => {
            console.log(`this is new added todo ${newToDo}`);
            return res.redirect('/')
        }).catch(err => {
            console.log(`Error while adding TODO ${err}`);
        })
})

// call delete function here
app.get('/delete', function(req, res){
    let id = req.query.id;

    ToDoList.findByIdAndDelete(id)
    .catch(err => {
        console.log(`error finding id ${err}`);
        return;
    })
    return res.redirect('back')
})

// render port here
app.listen(port, function (err) {
    if (err) {
        console.log(`error found in port ${err}`);
        reutrn;
    }
    console.log(`port launched successfully`);
})