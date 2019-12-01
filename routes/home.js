const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');
const { authenticated } = require('../config/auth')



router.get('/', authenticated, (req, res) => {
    Account.find({ userId: req.user._id }, (err, list) => {
        if(err) console.log(err)
        return res.render('index', { list });
    })
})

module.exports = router;