const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const moment = require("moment");
const { authenticated } = require("../config/auth");






router.get("/", authenticated, (req, res) => {
    Account.find({ userId: req.user._id }, (err, list) => {
        const today = moment().format("YYYYMMDD");
        const ITEM_PER_PAGE = 10;
        const totalPages = Math.ceil(list.length / ITEM_PER_PAGE) || 1;
        const pages = [];
        let page = req.query.page;
        const offset = Number(page) * ITEM_PER_PAGE;
        let paginationData = list.slice(0,10);
        for(let i =1;i <= totalPages;i++){
            pages.push(i);
        }
        if(page){
            paginationData = list.slice(offset, offset + ITEM_PER_PAGE);
            if(req.query.sortBy === "date"){
                paginationData.sort((a, b) => a.date - b.date);
            }else if(req.query.sortBy === "price"){
                paginationData.sort((a, b) => a.price - b.price);
            }
        }
        if(err) console.log(err)
        return res.render("index", { paginationData, pages, today });
    })
})

module.exports = router;