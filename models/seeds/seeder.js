const mongoose = require('mongoose');
const Account = require('../account');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/account', { useNewUrlParser:true, useUnifiedTopology: true });

const db = mongoose.connection;
mongoose.set('useCreateIndex', true)

db.on('error', () => {
    console.log('db error')
})

db.once('open', () => {
    console.log('db connected!');

    for(let i = 10;i < 23;i++){
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'food',
            date: `202003${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'cloth',
            date: `202003${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'drink',
            date: `202003${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'rent',
            date: `202003${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'traffic',
            date: `202003${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
    }
    console.log('done')
})