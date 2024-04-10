'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';


function fetchAvailableTimeSlots(date: Date) {
  //TODO: function should fetch from the database, this is just a simulation
  //should be part of some DataMapper of reservations

  return [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
  ];
}

function tileDisabled({ date }: { date: Date }): boolean {
  // disable weekends
  if (date.getDay() == 0 || date.getDay() == 6) {
    return true;
  }
  // TODO: disable dates without reservations available (full capacity)
  //should be returning some function of DataMapper of reservations

  return false;
};

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState(['']);


  function showAvailableTimeSlots(date: Date) {
    setTimeSlots(fetchAvailableTimeSlots(date));
  }

  function daySelect(date: Date) {
    setSelectedDate(date);
    console.log(selectedDate);
    showAvailableTimeSlots(date);
  }

  const today = new Date();
  const next60Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 60);
  return (
    <div>
      <Calendar
        minDate={today}
        maxDate={next60Days}
        tileDisabled={tileDisabled}
        onClickDay={daySelect}
      />
      {selectedDate instanceof Date && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Time Slots for {selectedDate.toDateString()}</h2>
          <ul>
            {timeSlots.map((timeSlot, index) => (
              <li key={index}>{timeSlot}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}