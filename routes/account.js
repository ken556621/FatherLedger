const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');


//new
router.get('/new', (req, res) => {
    res.render('new');
})

router.post('/new', (req, res, next) => {
    let selectCategory = '';
    if(req.body.food){
        selectCategory = 'Food';
    }else if(req.body.cloth){
        selectCategory = 'Cloth';
    }else if(req.body.drink){
        selectCategory = 'Drink';
    }
    // const newList = new Account({
    //     price = req.body.price,
    //     category = selectCategory,
    //     description = req.body.description
    // })
    next();
})


module.exports = router;