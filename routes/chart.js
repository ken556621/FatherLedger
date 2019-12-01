const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');

//display chart
router.get('/week', (req,res) => {
    let targetDate = Number(moment().subtract(7, 'days').format('YYYYMMDD'));
    Account.find({ date: {$gte:targetDate} }, (err, lists) => {
        console.log(lists, targetDate);
        const food = lists.filter(list => list.category === 'food');
        const cloth = lists.filter(list => list.category === 'cloth');
        const drink = lists.filter(list => list.category === 'drink');
        const rent = lists.filter(list => list.category === 'rent');
        const traffic = lists.filter(list => list.category === 'traffic');
        const category = [food, cloth, drink, rent, traffic];
        res.json(category);
    })
})

router.get('/month', (req,res) => {
    res.render('chart');
})

router.get('/halfyear', (req,res) => {
    res.render('chart');
})

router.get('/custom', (req,res) => {
    res.render('chart');
})

module.exports = router;