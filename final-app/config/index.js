var configValues = require('./config');

// Import db credentials
// Should decrypt here

module.exports = {

    // Should implement param for dev or prod here
    getDbConnectionString: function(){
        return 'mongodb://'+ configValues.username +':' + configValues.password + '@ds141434.mlab.com:41434/node-todo';
    }

}