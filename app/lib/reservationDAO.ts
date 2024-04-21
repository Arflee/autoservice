import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";

export interface ReservationDAO {
  GetReservationAllInfo() : Promise<Reservation[]>;
  GetAllReservations() : Promise<rezervace[]>;
  PostReservation(data: Reservation) : Promise<void>;
}
