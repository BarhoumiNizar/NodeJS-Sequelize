module.exports = function(app) {

    const users = require('../controller/user.controller.js');

    // Page Add User
    app.get('/User/Add', users.AjoutUser);
    // Create a new User
    app.post('/User/Add', users.create);

    
}