const exphbs = require('express-handlebars').create({ defaultLayout: 'layout' });
const cookieParse = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//enviroments
require('dotenv').config();

//connection database
require('./config/db.config');


//settings
app.engine('handlebars', exphbs.engine);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'handlebars');

//middlewares
app.use(morgan('dev'));
app.use(cookieParse());
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index.routes'));


//server
app.listen(process.env.PORT || 4000, () => {
    console.log("server live 4000");
});
