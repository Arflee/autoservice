"use client";

import { formatDateTime, getAvailableTimeSlots } from "@/app/lib/data";
import { useState } from "react";
import Calendar from "react-calendar";
import ReservationForm from "./reservationForm";
import { rezervace } from "@prisma/client";

export default function CustomCalendar({
  allReservations,
}: {
  allReservations: rezervace[];
}) {
  const currentTime = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(currentTime);
  const [timeSlots, setTimeSlots] = useState<number[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(8);
  
  async function daySelect(date: Date) {
      setSelectedDate(date);
      const availableTimeSlots = getAvailableTimeSlots(
        allReservations,
        selectedDate
      );
    setTimeSlots(availableTimeSlots);
    setSelectedTimeSlot(null); // Reset selected time slot
  }

  function tileClassName({ date }: { date: Date }) {
    // Disable weekends, days in the past, and 60 days in the future
    const today = new Date();
    const next60Days = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 60
    );
    if (
      date.getDay() === 0 ||
      date.getDay() === 6 ||
      date < today ||
      date > next60Days
    ) {
      return "disabled";
    }

    // Check if there are available time slots for the date
    if (timeSlots.length === 0) {
      return "unavailable";
    }
    return "available";
  }

  return (
    <>
      <div className="grid grid-cols-2 mx-[20%]">
        <div>
          <h2 className="text-xl font-semibold mb-5">Datum:</h2>
          <Calendar
            tileClassName={tileClassName}
            onClickDay={daySelect}
            selectRange={false} // Prevent selecting ranges
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">Čas:</h2>

          {selectedDate && (
            <div>
              <h3 className="text-l font-semibold mb-2">
                Dostupné termíny v {formatDateTime(selectedDate)}
              </h3>
              <ul>
                {timeSlots.map((timeSlot, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedTimeSlot(timeSlot)}
                    className="inline-block cursor-pointer border-2 m-2 px-2"
                  >
                    {timeSlot}:00 - {timeSlot + 1}:00
                  </li>
                ))}
              </ul>
            </div>
          )}
          <br />
        </div>
      </div>
      <h3 className="text-center mt-10 mb-3 text-xl">Vybraný termín: </h3>
      <p className="text-center  mb-10 text-xl">
        {selectedDate != null ? `${formatDateTime(selectedDate)}` : ""}{" "}
        {selectedTimeSlot != null
          ? `${selectedTimeSlot}:00 - ${selectedTimeSlot + 1}:00`
          : ""}
      </p>
      <ReservationForm
        selectedDate={selectedDate}
        selectedTimeSlot={selectedTimeSlot}
      />
    </>
  );
}
