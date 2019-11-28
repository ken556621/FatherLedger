const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');



//new
router.get('/new', (req, res) => {
    Account.findOne((err, list) => {
        const selectDate = req.body.date;
        if(err) return console.log(err)
        return res.render('new', { selectDate });
    })
})

router.post('/new', (req, res, next) => {
    console.log(req.body)
    const newList = new Account({
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        payment: req.body.payment,
        date: req.body.date,
        monthlyCheck:req.body.monthlyCheck
    })
    newList.save(err => {
        if(err) console.log(err)
        return res.redirect('/');
    })
})

//select date to see
router.get('/selectDate', (req, res) => {
    console.log(req.query)
    Account.find({ date: req.query.date }, (err, list) => {
        const date = list[0].date;
        if(err) return console.log(err)
        return res.render('index', { list, date });
    })
})

//edit
router.put('/:id/edit', (req, res) => {
    Account.findById({ _id: req.params.id }, (err, list) => {
        console.log(list)
        const category = {
            food: false,
            cloth: false,
            drink: false
        }
        const payment = {
            creditcard: false,
            cash: false
        }
        if(list.category === "food"){
            category.food = true;
        }else if(list.category === "cloth"){
            category.cloth = true;
        }else if(list.category === "drink"){
            category.drink = true;
        }
        if(list.payment === "creditcard"){
            payment.creditcard = true
        }else if(list.payment === "cash"){
            payment.cash = true
        }
        if(err) return console.log(err)
        return res.render('new', { list, category, payment })
    })
})

//delete
router.delete('/:id/delete', (req, res) => {
    Account.findById({ _id: req.params.id }, (err, list) => {
        if(err) return console.log(err)
        return list.remove(err => {
            if(err) return console.log(err)
            res.redirect('/');
        })
    })
})


module.exports = router;