
import { BookingsService } from "../services/bookings.service.js";

const bookingsService = new BookingsService();

export default class BookingController {
  async createBooking(req, res) {
    try {
      const newBooking = await bookingsService.createBooking(req.body);

      const bookings = await bookingsService.getBookings();
      req.app.io.emit("bookingsUpdated", bookings);

      res.status(201).json(newBooking);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }

  async getBookings(req, res) {
    try {
      const bookings = await bookingsService.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener las reservas",
      });
    }
  }

  async getBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await bookingsService.getBookingById(id);

      if (!booking) {
        return res.status(404).json({
          error: "Reserva no encontrada",
        });
      }

      res.json(booking);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener la reserva",
      });
    }
  }

  async addServiceToBooking(req, res) {
    try {
      const { bid, sid } = req.params;

      const updatedBooking =
        await bookingsService.addServiceToBooking(bid, sid);

      const bookings = await bookingsService.getBookings();
      req.app.io.emit("bookingsUpdated", bookings);

      res.json(updatedBooking);
    } catch (error) {
      if (
        error.message === "Reserva no encontrada" ||
        error.message === "Servicio no encontrado"
      ) {
        return res.status(404).json({
          error: error.message,
        });
      }

      res.status(500).json({
        error: error.message,
      });
    }
  }

  async updateBooking(req, res) {
    try {
      const { id } = req.params;
      const updatedBooking = await bookingsService.updateBooking(
        id,
        req.body,
      );

      if (!updatedBooking) {
        return res.status(404).json({
          error: "Reserva no encontrada",
        });
      }

      const bookings = await bookingsService.getBookings();
      req.app.io.emit("bookingsUpdated", bookings);

      res.json(updatedBooking);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }

  async deleteBooking(req, res) {
    try {
      const { id } = req.params;
      const deletedBooking = await bookingsService.deleteBooking(id);

      if (!deletedBooking) {
        return res.status(404).json({
          error: "Reserva no encontrada",
        });
      }

      const bookings = await bookingsService.getBookings();
      req.app.io.emit("bookingsUpdated", bookings);

      res.json({
        message: "Reserva eliminada exitosamente",
        booking: deletedBooking,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al eliminar la reserva",
      });
    }
  }
}
