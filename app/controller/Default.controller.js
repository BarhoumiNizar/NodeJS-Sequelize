const db = require('../config/db.config.js');
const User = db.users;

// Login Page
exports.Login = (req, res) => {
    res.render('login', { msg: req.flash('message') });

};
// Verif Login 
exports.verifLogin = (req, res) => {
        let email = req.body.email;
        let mdp = req.body.password;
        if (email == "tunisiawebdev@gmail.com" && mdp == "nizar") {
            res.redirect('/home');
        } else {
            req.flash('message', 'Email / Password Incorrect');
            res.redirect('/');
        }
    }
    // Home Page
exports.HomePage = (req, res) => {

    res.render('index');

};