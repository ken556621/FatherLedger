const mongoose = require('mongoose');
const Account = require('../account');

mongoose.connect('mongodb://localhost/account', { useNewUrlParser:true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('db error')
})

db.once('open', () => {
    console.log('db connected!');

    for(let i = 23;i < 30;i++){
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'traffic',
            date: `201911${i}`,
            payment: 'cash'
        })
    }
    console.log('done')
})