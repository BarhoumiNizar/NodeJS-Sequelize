module.exports = function(app) {

    const defaults = require('../controller/Default.controller.js');

    // Home Page
    app.get('/', defaults.Login);
    // Verif Login
    app.post('/', defaults.verifLogin);
    // Home Page
    app.get('/home', defaults.HomePage);


}