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
