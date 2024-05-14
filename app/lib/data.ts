import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";
import { PrismaClient } from "@prisma/client";

export const address =
  process.env.NODE_ENV == "production" ? "0.0.0.0" : "localhost";
  const reservationApiEndpoint = `http://${address}:3000/api/reservations`;
  
  const prisma = new PrismaClient();
  export { prisma };
  
  export const formatDateTime = (dateTime: Date) => {
    return dateTime.toLocaleString("cs-CZ", {
      weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

/* c8 ignore start */
export async function postReservation(reservation: Reservation) {
  try {
    return await fetch(reservationApiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
/* c8 ignore stop */

export function getAvailableTimeSlots(
  allReservations: rezervace[],
  date: Date
) {
  const availableTimeSlots = [8, 9, 10, 11, 12];
  for (let i = 0; i < allReservations.length; i++) {
    const convertedReservation = new Date(allReservations[i].datum);
    const reservationDay = convertedReservation.getDay();
    const reservationMonth = convertedReservation.getMonth();

    if (
      reservationDay == date.getDay() &&
      reservationMonth == date.getMonth()
    ) {
      const reservationHours = +allReservations[i].cas.slice(0, 2);
      if (availableTimeSlots.includes(reservationHours)) {
        const timeSlotIndex = availableTimeSlots.indexOf(reservationHours);
        availableTimeSlots.splice(timeSlotIndex, 1);
      }
    }
  }
  return availableTimeSlots;
}
