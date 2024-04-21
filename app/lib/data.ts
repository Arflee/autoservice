import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";

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



export async function fetchServices() {
  try {
    const data = await fetch("http://0.0.0.0:3000/api/services");
    return await data.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchReservations() {
  try {
    const data = await fetch("http://0.0.0.0:3000/api/reservations");
    return await data.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch reservation data.");
  }
}

export async function fetchReseravationList() {
  try {
    const data = await fetch("http://0.0.0.0:3000/api/reservations?list=true");
    return await data.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch reservation data.");
  }
}

export async function postReservation(reservation: Reservation) {
  try {
    return await fetch("http://localhost:3000/api/reservations", {
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

export async function fetchAvailableTimeSlots(date: Date) {
  const allReservations = await fetchReservations() as rezervace[];
  
  return getAvailableTimeSlots(allReservations, date);
}

export function getAvailableTimeSlots(allReservations: rezervace[], date: Date) {
  const availableTimeSlots = [8, 9, 10, 11, 12];
  for (let i = 0; i < allReservations.length; i++) {
    const convertedReservation = new Date(allReservations[i].datum)
    const reservationDay = convertedReservation.getDay()
    const reservationMonth = convertedReservation.getMonth()

    if (reservationDay == date.getDay() && reservationMonth == date.getMonth()) {
      const reservationHours = +allReservations[i].cas.slice(0, 2);
      if (availableTimeSlots.includes(reservationHours)) {
        const timeSlotIndex = availableTimeSlots.indexOf(reservationHours)
        availableTimeSlots.splice(timeSlotIndex, 1);
      }
    }
  }
  return availableTimeSlots
}