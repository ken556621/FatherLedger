const mongoose = require('mongoose');
const Account = require('../account');

mongoose.connect('mongodb://localhost/account', { useNewUrlParser:true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('db error')
})

db.once('open', () => {
    console.log('db connected!');

    for(let i = 10;i < 23;i++){
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'food',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'cloth',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'drink',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'rent',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'traffic',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de3cab3a359256356eb63b1"
        })
    }
    console.log('done')
})