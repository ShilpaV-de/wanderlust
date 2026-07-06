const express = require("express");
const Review = require("../models/review.js");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const wrapAsync = require("../utills/wrapAsync.js");
const ExpressError = require("../utills/ExpressError.js");
const { route } = require("./listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");
// Reviews

// post Route
router.post("/", isLoggedIn,validateReview, wrapAsync (reviewController.createReview));

// DELETE review
router.delete("/:reviewId",isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.destroyReview));

module.exports = router;