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
// PAge Ajout User
exports.AjoutUser = (req, res) => {

    //res.json(result);
    res.render('User/Ajout.ejs');

};
// Add User
exports.create = (req, res) => {
    // Save in MySQL database
    let user = req.body;
    User.create(user).then(result => {


        // Result après l'envoi

        res.json(result);
    });
};

// Afficher  les users
exports.findAll = (req, res) => {
    User.findAll().then(users => {
        // Send all users to Client
        res.json(users);
    });
};

// FindById
exports.findById = (req, res) => {
    User.findById(req.params.Id_user).then(user => {
        res.json(user);
    })
};

// Update a User
exports.update = (req, res) => {
    let user = req.body;
    let id = req.body.id;
    User.update(user, { where: { id: id } }).then(() => {
        res.json({ msg: "Modification effectuée de user d\'id = " , `${id}` });
    });
};

// Delete  User 
exports.delete = (req, res) => {
    const id = req.params.Id_user;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.json({ msg: 'deleted successfully a user with id = ' , `${id}` });
	});

};
