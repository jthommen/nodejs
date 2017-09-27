var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){

        // Seed database --> can also use fake data generator beta.json-generator.com
        var starterTodos = [
            {
                username: 'Test',
                todo: 'Buy Stuff',
                isDone: false,
                hasAttachement: false
            },{
                username: 'Test2',
                todo: 'Do Stuff',
                isDone: false,
                hasAttachement: false
            },{
                username: 'Test3',
                todo: 'Clean up Stuff',
                isDone: false,
                hasAttachement: false
            }
        ];

        // Create mongodb entries and show results when done
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });

        // Implement check for prod or dev
        // Implement check if seed is already there

    });
}