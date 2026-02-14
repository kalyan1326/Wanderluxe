const express = require("express")
const router = express.Router();
const Listing = require("../models/listing.js")
// const Review = require("../models/review.js")
const wrapAsync = require("../utils/wrapAsync.js")
const {isLoggedIn, isOwner} = require("../middleware.js")
const {validateListing} = require("../middleware.js")
const listingController = require("../controller/linsting.js")
const multer = require("multer")
const storage = require("../cloudConfig.js")
const upload = multer(storage)
  
router.get("/", wrapAsync(listingController.index) )
   
router.get("/", wrapAsync(listingController.filteredLists) )

router.get("/new", isLoggedIn, listingController.renderNewForm );

router.post("/",upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing))

router.get("/:id", wrapAsync(listingController.showListing))

router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.editListing));

router.put("/:id", upload.single("listing[image]"), validateListing, isLoggedIn, isOwner, wrapAsync(listingController.updateListing));

router.delete("/:id",isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router