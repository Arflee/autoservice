import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";
/**
 * @description Every object that wants to receive reservation info from db has to implement this interface
 * @interface
 */
export interface ReservationDAO {

/**
 * @description Method queries to db and gets reservation combined with user info and vechicle info
 * @returns Awaitable promise with data fields
 */
  GetReservationAllInfo() : Promise<Reservation[]>;

/**
 * @description Method queries to db and gets only reservation info
 * @returns Awaitable promise with all reservations
 */
  GetAllReservations() : Promise<rezervace[]>;

/**
 * @description When user reserves time on site, this method posts all his entered info to db
 * @returns Awaitable promise
 */
  PostReservation(data: Reservation) : Promise<void>;
}
