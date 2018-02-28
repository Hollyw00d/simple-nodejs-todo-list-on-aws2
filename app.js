const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// An instance of the express app
const app = express();

// bodyParser can send post data
app.use(bodyParser.urlencoded( {extended: true} ));

// Tell express to use handlebars as it's templating engine
// and look for a file called "views/layouts/base.handlebars" for
// the master layouts and then other files inside "views"
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

let Todo = require('./models/todoModel');

app.get('/', (req, res) => {
    let urlSignup;
    
    if(req.originalUrl === '/') {
        urlSignup = '/';
    }

    res.render('signup', {
        urlSignup
    });
});

app.get('/login', (req, res) => {
    let urlLogin;
    if(req.originalUrl === '/login') {
        urlLogin = '/login';
    }

    res.render('login', {
        urlLogin
    });
});

// Set port
let port = Number(process.env.PORT || 3000);

// app listens locally on port 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});