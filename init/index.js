const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const sampleReviews = require("./reviewData.js");
const review = require("../models/review.js");
const dbUrl = process.env.ATLASDB_URL;
main()
    .then(res => console.log("successfully connected"))
    .catch(err => console.log("err", err))
async function main() {
    await mongoose.connect(dbUrl)
}

const initDB = async () => {
  initData.data = initData.data.map((obj)=> ({...obj, owner : "6990665067b940e1594c2dcf" }))
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();