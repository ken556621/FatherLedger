const express = require('express');
const router = express.Router();
const Account = require('../models/account')

router.get('/', (req, res) => {
    Account.find((err, list) => {
        if(err) console.log(err)
        return res.render('index', { list });
    })
})

module.exports = router;