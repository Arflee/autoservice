'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';


function fetchAvailableTimeSlots(date: Date) {
  //TODO: function should fetch from the database, this is just a simulation
  //should be part of some DataMapper of reservations
  //the number is the starting hour of timeslot
  return [8,9,10,11,12];
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
  const [timeSlots, setTimeSlots] = useState([0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Number | null>(null);

  function daySelect(date: Date) {
    setSelectedDate(date);
    console.log(selectedDate);
    setTimeSlots(fetchAvailableTimeSlots(date));
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
              <li className="cursor-pointer" onClick={()=>setSelectedTimeSlot(timeSlot)}>{timeSlot}:00 - {timeSlot+1}:00</li>
            ))}
          </ul>
        </div>
      )}
      <br/>
      <p>Selected timeslot: {selectedTimeSlot}</p>
    </div>
  );
}