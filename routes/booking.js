const express = require("express");
const router = express.Router({ mergeParams: true });

const { createBooking } = require("../controllers/booking.js");
const { isLoggedIn } = require("../middleware.js");

router.post("/:id/book", isLoggedIn, createBooking);

module.exports = router;
