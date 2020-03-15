const mongoose = require("mongoose");
const Account = require("../account");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/account", { useNewUrlParser:true, useUnifiedTopology: true });

const db = mongoose.connection;
mongoose.set("useCreateIndex", true)

db.on("error", () => {
    console.log("db error")
})

db.once("open", () => {
    console.log("db connected!");

    for(let i = 10;i < 30;i++){
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: "food",
            date: `202002${i}`,
            payment: "cash",
            userId: "5e6b7c6f783d1d0004380e34"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: "cloth",
            date: `202002${i}`,
            payment: "cash",
            userId: "5e6b7c6f783d1d0004380e34"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: "drink",
            date: `202002${i}`,
            payment: "cash",
            userId: "5e6b7c6f783d1d0004380e34"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: "rent",
            date: `202002${i}`,
            payment: "cash",
            userId: "5e6b7c6f783d1d0004380e34"
        })
        Account.create({ 
            price: Math.floor(Math.random() * 10000),
            category: "traffic",
            date: `202002${i}`,
            payment: "cash",
            userId: "5e6b7c6f783d1d0004380e34"
        })
    }
})