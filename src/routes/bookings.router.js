import express from "express";
import BookingController from "../controllers/bookings.controller.js";
import {validateBody,validateParams,} from "../middlewares/validation.middleware.js";
import {bookingSchema,addServiceToBookingSchema,updateBookingSchema,} from "../validations/booking.validation.js";

const router = express.Router();
const bookingController = new BookingController();

router.get("/", bookingController.getBookings);
router.get("/:id", bookingController.getBookingById);

router.post("/", validateBody(bookingSchema), bookingController.createBooking);
router.post("/:bid/services/:sid",validateParams(addServiceToBookingSchema),bookingController.addServiceToBooking,);

router.put("/:id", validateBody(bookingSchema),bookingController.updateBooking);
router.patch("/:id",validateBody(updateBookingSchema),bookingController.updateBooking);

router.delete("/:id", bookingController.deleteBooking);

export default router;
