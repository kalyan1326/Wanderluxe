const Listing = require("../models/listing.js")
const mbxGoecoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapToken = process.env.MAP_TOKEN
const geoCodingClient = mbxGoecoding({ accessToken: mapToken })

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({})
    const { category } = req.query;
    const { search } = req.query;
    if (category) {
        // console.log(category)
        let listings = category
            ? await Listing.find({ category })
            : await Listing.find({});
        // console.log(listings)
        res.render("listings/index.ejs", {
            allListings: listings,
            selectedCategory: category
        });
    }
    if (search && search.trim() !== "") {
        let Listings = await Listing.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { country: { $regex: search, $options: "i" } }
            ]
        });
        res.render("listings/index.ejs", {
            allListings: Listings,
            search
        });

    }
    res.render("listings/index.ejs", { allListings })
}

// module.exports.filteredLists = async (req, res) => {
//     const { category } = req.query;
//     console.log(category)
//     let listings = category
//         ? await Listing.find({ category })
//         : await Listing.find({});

//     res.render("listings/index", {
//         allListings: listings,
//         selectedCategory: category
//     });
// }

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.createListing = async (req, res, err) => {
    let responce = await geoCodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send()
    let url = req.file.path
    let filename = req.file.filename
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id
    newListing.image = { url, filename }
    newListing.geometry = responce.body.features[0].geometry
    await newListing.save();
    req.flash("success", "new listing created")
    res.redirect("/listings");
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    let listDetail = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner")
    // console.log(listDetail.owner.id)
    // console.log(listDetail)
    if (!listDetail) {
        req.flash("error", "listing not exists")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listDetail })
}
module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    let listDetail = await Listing.findById(id)
    // console.log(listDetail)
    let originalListingImg = listDetail.image.url;
    // originalListingImg = originalListingImg.replace("/upload", "/upload/w_20")
    res.render("./listings/edit.ejs", { listDetail, originalListingImg })
}
module.exports.updateListing = async (req, res) => {
    const { id } = await req.params;
    let updatedList = await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    // console.log(updatedList)
    // res.render("listings/edit.ejs", {listDetail})
    if (typeof req.file != "undefined") {
        let url = req.file.path
        let filename = req.file.filename
        updatedList.image = { url, filename }
        await updatedList.save();
    }
    req.flash("success", "listing updated")
    res.redirect(`/listings/${id}`)
}
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success", "listing deleted")
    res.redirect("/listings");
}

