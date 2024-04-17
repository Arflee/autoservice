'use client';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';


const formatDateTime = (dateTime: Date) => {
  return dateTime.toLocaleString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
};

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

      <div className='grid grid-cols-2 mx-[20%]'>
        <div>
          <h2 className='text-xl font-semibold mb-5'>Datum:</h2>
        <Calendar
          tileClassName={tileClassName}
          onClickDay={daySelect}
          selectRange={false} // Prevent selecting ranges
        />
        </div>
        
        <div>
        <h2 className='text-xl font-semibold mb-5'>Čas:</h2>

          {selectedDate && (
            <div>
              <h3 className="text-l font-semibold mb-2">Dostupné termíny v {formatDateTime(selectedDate)}</h3>
              <ul>
                {timeSlots.map((timeSlot, index) => (
                  <li key={index} onClick={() => setSelectedTimeSlot(timeSlot)}  className="inline-block cursor-pointer border-2 m-2 px-2" >
                    {timeSlot}:00 - {timeSlot + 1}:00
                  </li>
                ))}
              </ul>
            </div>
          )}
          <br />
        </div>
      </div>
      <h3 className='text-center mt-10 mb-3 text-xl'>Vybraný termín: </h3>
      <p className='text-center  mb-10 text-xl'>{selectedDate != null ? `${formatDateTime(selectedDate)}` : ''} {selectedTimeSlot != null ? `${selectedTimeSlot}:00 - ${selectedTimeSlot + 1}:00` : ''}</p>

    </div>

  );
}