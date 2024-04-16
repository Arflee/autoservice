'use client'

import MyCalendar from "@/components/calendar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Rezervace termínu</h1>
      <MyCalendar />
      <h2 className="text-2xl font-bold mt-10 mb-5 text-center">Vaše údaje</h2>
      <form className="flex flex-col w-64 mx-auto p-4 ">
        <input type="text" placeholder="Jméno" className="mb-5" />
        <input type="text" placeholder="Příjmení" className="mb-5" />
        <input type="text" placeholder="E-mail" className="mb-5" />
        <input type="text" placeholder="Tel. č." className="mb-5" />
        <input type="text" placeholder="Model vozidla" className="mb-5" />
        <input type="text" placeholder="SPZ" className="mb-5" />
        <button type="submit" className="inline-block mt-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
          Rezervovat
        </button>
      </form>
    </main>
  );
}
