'use client'

import MyCalendar from "@/components/calendar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Page() {
  return (
      <MyCalendar />
  );
}
