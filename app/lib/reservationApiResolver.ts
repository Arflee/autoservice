import { Reservation } from "./definitions";
import { ReservationDAO } from "./reservationDAO";

export class ReservationApiResolver {
  private reservationDao: ReservationDAO;

  constructor(daoInterface: ReservationDAO) {
    this.reservationDao = daoInterface;
  }

  public async fetchReservations() {
    try {
      const data = await this.reservationDao.GetAllReservations();
      return data;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch reservation data.");
    }
  }

  public async fetchReservationList() {
    try {
      const data = await this.reservationDao.GetReservationAllInfo();
      return data;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch reservation data.");
    }
  }

  async postReservation(reservation: Reservation) {
    try {
      await this.reservationDao.PostReservation(reservation)
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to post reservation.");
    }
  }
}
