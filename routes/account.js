const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const moment = require("moment");
const { authenticated } = require("../config/auth");



//new
router.get("/new", authenticated, (req, res) => {
    Account.findOne({ userId: req.user._id }, (err, list) => {
        const selectDate = req.body.date;
        if(err) return console.log(err)
        return res.render("new", { selectDate });
    })
})

router.post("/new", authenticated, (req, res, next) => {
    console.log(Number(req.body.date.split("-").join("")))
    const newList = new Account({
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        payment: req.body.payment,
        date: Number(req.body.date.split("-").join("")),
        monthlyCheck:req.body.monthlyCheck,
        userId: req.user._id
    })
    if(req.body.date === ""){
        errorMessage = true;
        return res.render("new", { errorMessage: errorMessage });
    }else{
        errorMessage = false;
    }
    newList.save(err => {
        if(err) console.log(err)
        return res.redirect("/");
    })
})

//select date to see
router.get("/selectDate", authenticated, (req, res) => {
    Account.find({ date: moment(req.query.date).format("YYYYMMDD"), userId: req.user._id }, (err, list) => {
        const date = list[0].date;
        if(err) return console.log(err)
        return res.render("index", { paginationData: list, date });
    }) 
})

//sort date
router.get("/sortDate", authenticated, (req, res) => {
    Account.find({ date: moment(req.query.date).format("YYYYMMDD"), userId: req.user._id }, (err, list) => {
        const date = list[0].date;
        if(err) return console.log(err)
        return res.render("index", { paginationData: list, date });
    }) 
})

//edit
router.get("/:id/edit", authenticated, (req, res) => {
    Account.findById({ _id: req.params.id, userId: req.user._id }, (err, list) => { 
        const category = {
            food: false,
            cloth: false,
            drink: false,
            rent: false,
            traffic: false
        }
        const payment = {
            creditcard: false,
            cash: false
        }
        const date = moment(`${list.date}`).format("YYYY-MM-DD");

        if(list.category === "food"){
            category.food = true;
        }else if(list.category === "cloth"){
            category.cloth = true;
        }else if(list.category === "drink"){
            category.drink = true;
        }else if(list.category === "rent"){
            category.rent = true;
        }else if(list.category === "traffic"){
            category.traffic = true;
        }
        if(list.payment === "creditcard"){
            payment.creditcard = true
        }else if(list.payment === "cash"){
            payment.cash = true
        }
        
        if(err) return console.log(err)
        return res.render("edit", { list, category, payment, date })
    })
})

router.put("/:id/edit", authenticated, (req, res) => {
    Account.findById({ _id: req.params.id, userId: req.user._id }, (err, list) => { 

        if(err) return console.log(err)

        if(req.body.date === ""){
            errorMessage = true;
            return res.render("edit", { errorMessage: errorMessage });
        }

        list.date = moment(`${list.date}`).format("YYYY-MM-DD");
        list.price = req.body.price;
        list.category = req.body.category;
        list.description = req.body.description;
        list.payment = req.body.payment;
        list.date = Number(req.body.date.split("-").join(""));
        list.monthlyCheck =req.body.monthlyCheck;
        list.userId = req.user._id;

        list.save(err => {
            console.log(err)
            return res.redirect("/")
        })
    })
})

//delete
router.delete("/:id/delete", authenticated, (req, res) => {
    Account.findById({ _id: req.params.id, userId: req.user._id }, (err, list) => {
        if(err) return console.log(err)
        return list.remove(err => {
            if(err) return console.log(err)
            res.redirect("/");
        })
    })
})


module.exports = router;