import MyCalendar from "@/components/calendar";
import ReservationForm from "@/components/reservationForm";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Rezervace termínu</h1>
      <MyCalendar />
      <h2 className="text-2xl font-bold mt-10 mb-5 text-center">Vaše údaje</h2>
      <ReservationForm/>
    </main>
  );
}