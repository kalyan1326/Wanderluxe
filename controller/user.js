const User = require("../models/user.js");
module.exports.renderSignUpform = (req, res) => {
    // res.send("Form")
    res.render("users/signup.ejs")
}
module.exports.signUp = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username })
        console.log(newUser)
        const registeredUser = await User.register(newUser, password)
        req.login(registeredUser, (err) => {
            if (err) {
                next(err)
            }
            req.flash("success", "welcome to wonderluxe!")
            res.redirect("/listings")
        })

    } catch (e) {
        req.flash("error", e.message)
        res.redirect("/signup")
    }
}
module.exports.renderLoginform = (req, res) => {
    res.render("users/login.ejs")
}
module.exports.login = async (req, res) => {
    req.flash("success", "welcome to WandurLuxe")
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl)
}
module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            next(err)
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings")
    })
}

module.exports.userDetails = async(req, res) => {
    let {id} = req.params;
    let user = await User.findById(id)
    res.render("users/userDetails.ejs", {user})
}