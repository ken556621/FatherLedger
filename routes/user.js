const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const saltRounds = 10;

//login
router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/users/login"
    })(req, res, next)
})

//register
router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    if(!name || !email || !password || !password2){
        errors.push({ message: "Every blank should be filled." });
    }
    if(password !== password2){
        errors.push({ message: "Password and Ensure password are different."});
    }
    if(errors.length > 0){
        res.render("register", { 
            errors,
            name,
            email,
            password,
            password2
         })
         return
    }
    User.findOne({ email: email }).then(user => {
        //已被註冊
        if(user){
            errors.push({ message: "The email has already been registed." })
            res.render("register", { 
                errors,
                name,
                email,
                password,
                password2
             });
        //新增至資料庫
        }else{
            const newUser = new User({
                name,
                email,
                password
            })
            //資料檢查，無email & password
            if(!email || !password){
                return res.render("register", {
                    errors,
                    name,
                    email,
                    password,
                    password2
                 }
                )
            }
        //加鹽&湊雜
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        res.redirect("/");
                    }).catch(err => console.log(err));
                })
            })
        }
    })
})

//logout
router.get("/logout", (req, res, next) => {
    req.logout();
    req.flash("success_msg", "You have been logout.")
    res.redirect("/users/login");
})

module.exports = router;

