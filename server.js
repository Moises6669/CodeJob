const express = require('express');
const app = express();

app.listen(process.env.PORT || 4000, () => {
    console.log("server live 4000");
});

//routes
app.use(require('./routes/index.routes'));