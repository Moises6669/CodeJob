const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 4000, () => {
    console.log("server live 4000");
});

//settings
app.engine('handlebars', exphbs({
    defaultLayout: 'layuot'
}));
app.set('view engine', 'handlebars');

//middlewares

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(require('./routes/index.routes'));