const Listing = require("./models/listing")
const Review = require("./models/review")
const { listingSchema, reviewSchema } = require("./schema.js")
const ExpressError = require("./utils/ExpressError.js")

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // console.log(req.path, req.originalUrl)
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "you must be logged in to add new listing")
        return res.redirect("/login")
    }
    next()
}

module.exports.savedRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next()
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id,reviewId } = await req.params;
    let review = await Review.findById(reviewId)
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "you are not author of this review to make changes.")
        return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = await req.params;
    let listing = await Listing.findById(id)
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "you are not allowed to make changes.")
        return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body)
    if (error) {
        errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(500, errMsg)
    }
    else {
        next()
    }
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body)
    if (error) {
        errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(500, errMsg)
    }
    else {
        next()
    }
}