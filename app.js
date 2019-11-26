const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const app = express();
const port = 3000;


app.engine('handlebars', exphbs({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));


//connect to mongodb
mongoose.connect('mongodb://localhost/account', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('Mongodb error');
})

db.once('open', () => {
    console.log('Mongodb connect')
})

//使用session
app.use(session({
    secret: 'My secret',
    resave: false,
    saveUninitialized: true
}))

//啟動 passport
app.use(passport.initialize());
app.use(passport.session());


//Router
app.use('/', require('./routes/home'));
app.use('/account', require('./routes/account'));




app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})