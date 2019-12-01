const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');



router.get('/', (req, res) => {
    Account.find((err, list) => {
        if(err) console.log(err)
        return res.render('index', { list });
    })
})

module.exports = router;