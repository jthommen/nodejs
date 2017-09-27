var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    // Middleware to parse out json from request body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    // API endpoint URLs
    // Get all todos of a user
    app.get('/api/todos/:username', function(req, res){

        // Use mongoose model to find user
        Todos.find({username: req.params.username}, function(err, todos){
            if(err) throw err;

            // Return results
            res.send(todos);
        });
    });

    // Show single todo
    app.get('/api/todo/:id', function(req, res) {

        // Use mongoose function to find todo by mongodb autogenerated _id
        Todos.findById({ _id: req.params.id}, function(err, todo){
            if(err) throw err;

            // Return result
            res.send(todo);
        });
    });

    // Update or new todos
    app.post('/api/todo/', function(req, res){

        // If todo has an id --> update
        if(req.body.id) {

            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttachement: req.body.hasAttachement
            }, function(err, todo){
                if(err) throw err;
                res.send('Success');
            });

        } else { // If no idea generate new todo

            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachement: req.body.hasAttachement
            });

            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            });

        }

    });

    // Delete todo
    app.delete('/api/todo', function(req,res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    })

}