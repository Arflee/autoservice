export const dynamic = 'force-dynamic'

import CustomCalendar from "@/components/calendar";
import { rezervace } from "@prisma/client";
import { ReservationApiResolver } from "../lib/reservationApiResolver";
import { ReservationDAOPrisma } from "../lib/reservationDAOPrisma";

export default async function Page() {
  const reservationResolver = new ReservationApiResolver(new ReservationDAOPrisma());
  const allReservations = await reservationResolver.fetchReservations() as rezervace[];
  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Rezervace termínu</h1>
      <CustomCalendar allReservations={allReservations}/>
    </main>
  );
}