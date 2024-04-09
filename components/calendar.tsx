'use client';

import { useState } from 'react';

function isFull(day: Date) {
    //TODO: function checks DB if there are all times reserved on this day (true) or if they are still some free(false)
    return false;
}

function isReservable(day: Date) {
    const today = new Date();
    //returns false if the day is weekend, in the past or too far in the future (60 days+)

    //checking if day is a weekend day
    if (day.getDay() == 0 || day.getDay() == 6)
        return false;

    if (day < new Date())
        return false;

    const next60Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 60);
    if (day > next60Days)
        return false;

    return true;
}



export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handlePrevMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth == 0 ? 11 : prevMonth - 1));
        setCurrentYear(prevYear => (currentMonth == 0 ? prevYear - 1 : prevYear));
    };

    const handleNextMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth == 11 ? 0 : prevMonth + 1));
        setCurrentYear(prevYear => (currentMonth == 11 ? prevYear + 1 : prevYear));
    };

    function renderCalendarDays() {
        const firstDayOfMonth = new Date(currentYear, currentMonth).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        let daysArray: React.JSX.Element[] = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentYear, currentMonth, i, new Date().getHours() + 1);
            const classNames = `cursor-pointer text-center p-2 ${
                    !isReservable(date) ? 'bg-gray-300' :
                    isFull(date) ? 'bg-red-200' : 'bg-green-400 hover:bg-green-300'
                }`;
                
            daysArray.push(
                <div className={classNames}>
                    {i}
                </div>
            );
        }


        return (daysArray);
    }

    return (
        <div>
            <button onClick={handlePrevMonth}>Prev</button>
            <button onClick={handleNextMonth}>Next</button>
            <div className="flex flex-row">
                <div>Po</div>
                <div>Út</div>
                <div>St</div>
                <div>Čt</div>
                <div>Pá</div>
                <div>So</div>
                <div>Ne</div>
            </div>
            <div className="grid grid-cols-7">
                {renderCalendarDays()}
            </div>

        </div>

    );
}