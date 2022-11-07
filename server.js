var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var app = express();
var bodyParser = require('body-parser');
// utilisé si on a des pages .ejs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('assets'));
app.use(cookieParser('secret')); // Pour les Cookies
app.use(session({ cookie: { maxAge: 60000 } })); // Session
app.use(flash()); // Add Msg with Flash
// on install et on ajoute le cors pour les API
/*const cors = require('cors')
    const corsOptions = {
        origin: 'http://localhost:4200',// ou bien '*'
        optionsSuccessStatus: 200
    }

app.use(cors())*/

//var DataTypes = require('sequelize/lib/data-types');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // configure template engine
var db = require('./app/config/db.config.js');



// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
    // initial();
});

require('./app/route/Default.route.js')(app);
require('./app/route/users.route.js')(app);

// Create a Server
var server = app.listen(8080, function() {

    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", h