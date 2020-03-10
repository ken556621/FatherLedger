const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const moment = require("moment");

//display chart
router.get("/week", (req,res) => {
    const today = Number(moment().format("YYYYMMDD"));
    const targetDate = Number(moment().subtract(7, "days").format("YYYYMMDD"));
    console.log({today, targetDate})
    Account.find({ date: { $gte: targetDate, $lte: today }, userId: req.user._id }, (err, lists) => {
        const food = lists.filter(list => list.category === "food");
        const cloth = lists.filter(list => list.category === "cloth");
        const drink = lists.filter(list => list.category === "drink");
        const rent = lists.filter(list => list.category === "rent");
        const traffic = lists.filter(list => list.category === "traffic");
        const category = [food, cloth, drink, rent, traffic];
        console.log(lists)
        res.json(category);
    })
})

router.get("/month", (req,res) => {
    const today = Number(moment().format("YYYYMMDD"));
    const targetDate = Number(moment().subtract(30, "days").format("YYYYMMDD"));
    Account.find({ date: { $gte: targetDate, $lte: today }, userId: req.user._id }, (err, lists) => {
        const food = lists.filter(list => list.category === "food");
        const cloth = lists.filter(list => list.category === "cloth");
        const drink = lists.filter(list => list.category === "drink");
        const rent = lists.filter(list => list.category === "rent");
        const traffic = lists.filter(list => list.category === "traffic");
        const category = [food, cloth, drink, rent, traffic];
        res.json(category);
    })
})

router.get("/halfyear", (req,res) => {
    const today = Number(moment().format("YYYYMMDD"));
    const targetDate = Number(moment().subtract(180, "days").format("YYYYMMDD"));
    Account.find({ date: { $gte: targetDate, $lte: today }, userId: req.user._id }, (err, lists) => {
        const food = lists.filter(list => list.category === "food");
        const cloth = lists.filter(list => list.category === "cloth");
        const drink = lists.filter(list => list.category === "drink");
        const rent = lists.filter(list => list.category === "rent");
        const traffic = lists.filter(list => list.category === "traffic");
        const category = [food, cloth, drink, rent, traffic];
        res.json(category);
    })
})

router.get("/custom", (req,res, next) => {
    const startDate = Number(moment(req.query.startDate).format("YYYYMMDD"));
    const endDate = Number(moment(req.query.endDate).format("YYYYMMDD"));
    Account.find({ date: { $gte: startDate, $lte: endDate }, userId: req.user._id }, (err, lists) => {
        if(err) console.log(err)
        const food = lists.filter(list => list.category === "food");
        const cloth = lists.filter(list => list.category === "cloth");
        const drink = lists.filter(list => list.category === "drink");
        const rent = lists.filter(list => list.category === "rent");
        const traffic = lists.filter(list => list.category === "traffic");
        const category = [food, cloth, drink, rent, traffic];
        res.json(category);
    })
})

module.exports = router;