const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require ("../models/listing.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
 
.then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

  const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: '6a086d618a991e1d9f5f5cf5',
      }));
    await Listing.insertMany(initData.data);
    console.log("data was initialied");
  };

  initDB();