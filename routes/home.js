const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const moment = require('moment');
const { authenticated } = require('../config/auth')



router.get('/', authenticated, (req, res) => {
    Account.find({ userId: req.user._id }, (err, list) => {
        const today = moment().format('YYYYMMDD');
        const totalPages = Math.ceil(list.length / 10) || 1;
        const pages = [];
        const paginationData = list.slice(0,10);
        for(let i =1;i <= totalPages;i++){
            pages.push(i);
        }
        if(err) console.log(err)
        return res.render('index', { paginationData, pages, today });
    })
})

router.get('/page/:id', authenticated, (req, res) => {
    Account.find({ userId: req.user._id }, (err, list) => {
        const totalPages = Math.ceil(list.length / 10) || 1;
        const ITEM_PER_PAGE = 10;
        const offset = Number(req.params.id) * ITEM_PER_PAGE;
        const paginationData = list.slice(offset, offset + ITEM_PER_PAGE);
        const pages = [];
        for(let i =1;i <= totalPages;i++){
            pages.push(i);
        }
        if(err) console.log(err)
        return res.render('index', { paginationData, pages });
    })
})

module.exports = router;