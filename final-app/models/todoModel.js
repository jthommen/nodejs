var mongoose = require('mongoose');

// Create mongodb schema
var todoSchema = new mongoose.Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachement: Boolean
});

// Create mongodb model from schema
var Todos = mongoose.model('Todos', todoSchema);

// Export Model
module.exports = Todos;