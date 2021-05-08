const exphbs = require('express-handlebars').create({defaultLayout:'layout'});
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//enviroments
require('dotenv').config();

//connection database
require('./config/db.config');


//settings
app.engine('handlebars',exphbs.engine);
app.set('views',path.join(__dirname,'view'));
app.set('view engine', 'handlebars');

//middlewares
app.use(morgan('dev'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index.routes'));


//server
app.listen(process.env.PORT || 4000, () => {
    console.log("server live 4000");
});
