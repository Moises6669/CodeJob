const mongoose = require('mongoose');

const MONGO_URI = process.env.DATABASE_URL;

mongoose.connect(MONGO_URI, ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}))
    .then(db => console.log('Connection estabislished with MongoDB'))
    .catch(err => console.log('error'));