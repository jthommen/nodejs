// Importing NodeJS Core Modules (native modules)
// Check API Documentation: https://nodejs.org/dist/latest-v6.x/docs/api/

var util = require('util');

var name = 'Juri';

var greeting = util.format('Hello %s', name);
util.log(greeting);