import { Reservation } from "./definitions";
import { ReservationDAO } from "./reservationDAO";

/**
 * @description Class uses pattern Strategy to use different connection methods to database
 * To change DAO class, you need to implement its interface and pass to ApiResolver
 */
export class ReservationApiResolver {
  private reservationDao: ReservationDAO;
  private reservationApiEndpoint = `http://localhost:3000/api/reservations`;

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
      const data = await fetch(this.reservationApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });
  
      return data
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to post reservation.");
    }
  }
}
