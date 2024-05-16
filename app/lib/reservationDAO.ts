import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";
/**
 * @description Every object that wants to receive data from db has to implement this interface
 */
export interface ReservationDAO {

/**
 * @description Method queries to db and gets reservation info + several additional data fields
 * @returns Awaitable promise with all reservations
 */
  GetReservationAllInfo() : Promise<Reservation[]>;

  
  GetAllReservations() : Promise<rezervace[]>;
  PostReservation(data: Reservation) : Promise<void>;
}
