const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const moment = require("moment");
const { authenticated } = require("../config/auth");

router.get("/", authenticated, (req, res) => {
    Account.find({ userId: req.user._id }, (err, list) => {
        const today = moment().format("YYYYMMDD");
        const eachPageItems = 10;
        const totalPages = Math.ceil(list.length / eachPageItems) || 1;
        const pages = [];
        let page = req.query.page;
        const offset = Number(page) * eachPageItems;
        let paginationData = list.slice(0,10);
        console.log(paginationData)
        for(let i = 1;i <= totalPages;i++){
            pages.push(i);
        }
        if(page){
            paginationData = list.slice(offset, offset + eachPageItems);
        }
        if(err) console.log(err)
        return res.render("index", { paginationData, pages, today });
    })
})

module.exports = router;