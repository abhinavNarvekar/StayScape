const express = require("express");
const router = express.Router({mergeParams:true});

const Review = require("../models/review.js");

const wrapAsync = require("../utils/wrapAsync.js");

const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");
//reviews post route
const reviewContoller=require("../controllers/reviews.js");
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewContoller.createReview));
//Delete review route

router.delete("/:reviewId",
    isLoggedIn,isReviewAuthor,wrapAsync(reviewContoller.destroyReview));

module.exports=router;