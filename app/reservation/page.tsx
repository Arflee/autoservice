export const dynamic = 'force-dynamic'

import ReservationForm from "@/components/reservationForm";
import { fetchAvailableTimeSlots, fetchReservations } from "../lib/data";
import CustomCalendar from "@/components/calendar";
import { rezervace } from "@prisma/client";

export default async function Page() {
  //todo pass all reservations
  const allReservations = await fetchReservations() as rezervace[];

  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Rezervace termínu</h1>
      <CustomCalendar allReservations={allReservations}/>
    </main>
  );
}