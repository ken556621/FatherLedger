const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Account = require('../models/account');
const moment = require('moment');


//new
router.get('/new', (req, res) => {
    res.render('new');
})

router.post('/new', (req, res, next) => {
    console.log(req.body)
    const newList = new Account({
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        payment: req.body.payment 
    })
    newList.save(err => {
        if(err) console.log(err)
        return res.redirect('/');
    })
})


module.exports = router;