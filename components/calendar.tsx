'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';




function fetchAvailableTimeSlots(date: Date) {
  // TODO: function should fetch from the database, this is just a simulation
  // should be part of some DataMapper of reservations
  // the number is the starting hour of timeslot
  return [8, 9, 10, 11, 12];

}

function tileClassName({ date }: { date: Date }) {
  // Disable weekends, days in the past, and 60 days in the future
  const today = new Date();
  const next60Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 60);
  if (date.getDay() === 0 || date.getDay() === 6 || date < today || date > next60Days) {
    return 'disabled';
  }
  // Check if there are available time slots for the date
  const availableTimeSlots = fetchAvailableTimeSlots(date);
  if (availableTimeSlots.length === 0) {
    return 'unavailable';
  }
  return 'available';
}

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<number[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null);

  function daySelect(date: Date) {
    setSelectedDate(date);
    setTimeSlots(fetchAvailableTimeSlots(date));
    setSelectedTimeSlot(null); // Reset selected time slot
  }

  return (
    <div>
      <Calendar
        tileClassName={tileClassName}
        onClickDay={daySelect}
        selectRange={false} // Prevent selecting ranges
      />
      {selectedDate && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Time Slots for {selectedDate.toDateString()}</h2>
          <ul>
            {timeSlots.map((timeSlot, index) => (
              <li key={index} className="cursor-pointer" onClick={() => setSelectedTimeSlot(timeSlot)}>
                {timeSlot}:00 - {timeSlot + 1}:00
              </li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <p>Selected timeslot: {selectedTimeSlot != null ? `${selectedTimeSlot}:00 - ${selectedTimeSlot + 1}:00` : 'None'}</p>
    </div>
  );
}