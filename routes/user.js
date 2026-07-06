const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const wrapAsync = require("../utills/wrapAsync");
const user = require("../models/user");

const userController = require("../controllers/user.js")

router.route("/signup")
.get((userController.renderSignupForm))
.post( wrapAsync(userController.signup));

router.route("/login")
.get((userController.renderLoginForm) )
.post(saveRedirectUrl,passport.authenticate("local",
    {failureRedirect: "/login",failureFlash: true,}),( userController.login));


router.post("/logout", (userController.logout));

module.exports = router;