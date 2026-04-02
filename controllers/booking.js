const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");

module.exports.createBooking = async (req, res) => {
  try {
    const { checkIn, checkOut } = req.body;

    const listing = await Listing.findById(req.params.id);

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    if (nights <= 0) {
      req.flash("error", "Invalid dates");
      return res.redirect(`/listings/${req.params.id}`);
    }

    // availability check
    const existingBookings = await Booking.find({
      listing: listing._id,
      $and: [
        { checkIn: { $lt: checkOutDate } },
        { checkOut: { $gt: checkInDate } },
      ],
    });

    if (existingBookings.length > 0) {
      req.flash("error", "Dates already booked!");
      return res.redirect(`/listings/${listing._id}`);
    }

    const totalPrice = nights * listing.price;

    const booking = new Booking({
      listing: listing._id,
      user: req.user._id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      totalPrice,
    });

    await booking.save();

    req.flash("success", "Booking successful!");
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};
