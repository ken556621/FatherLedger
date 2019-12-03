const mongoose = require('mongoose');
const Account = require('../account');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/account', { useNewUrlParser:true });

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
            userId: "5de4a961251bcd763ad7cc21"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'cloth',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de4a961251bcd763ad7cc21"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'drink',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de4a961251bcd763ad7cc21"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'rent',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de4a961251bcd763ad7cc21"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: 'traffic',
            date: `201911${i}`,
            payment: 'cash',
            userId: "5de4a961251bcd763ad7cc21"
        })
    }
    console.log('done')
})