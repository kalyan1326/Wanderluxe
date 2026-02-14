const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js")


router.get("/signup",userController.renderSignUpform )

router.post("/signup", wrapAsync(userController.signUp))

router.get("/login", userController.renderLoginform)

router.post("/login",savedRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}),userController.login )

router.get("/logout",userController.logout )

router.get("/user/:id", userController.userDetails)

module.exports = router
