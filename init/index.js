const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const sampleReviews = require("./reviewData.js");
const review = require("../models/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderluxe";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // await Listing.deleteMany({});
  // initData.data = initData.data.map((obj)=> ({...obj, owner : "698f7f2c31fd3cd6d037013e" }))
  // await Listing.insertMany(initData.data);
  // console.log("data was initialized");

  await Review.deleteMany({});
  let rvs = await Review.insertMany(sampleReviews);
  console.log("Sample reviews inserted!", rvs);
};

initDB();