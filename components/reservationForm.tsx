"use client";

import { postReservation } from "@/app/lib/data";
import { Reservation } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function ReservationForm({
  selectedDate,
  selectedTimeSlot,
}: {
  selectedDate: Date | null;
  selectedTimeSlot: number | null;
}) {
  const router = useRouter();
  const givenName = useRef("");
  const familyName = useRef("");
  const email = useRef("");
  const telNumber = useRef("");
  const vehicleModel = useRef("");
  const spz = useRef("");
  const service = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTimeSlot || !selectedDate) return;

    const reservation = {
      givenName: givenName.current,
      familyName: familyName.current,
      email: email.current,
      telNumber: telNumber.current,
      vehicleModel: vehicleModel.current,
      spz: spz.current,
      date: selectedDate.toISOString().split("T")[0],
      time: `0${selectedTimeSlot}:00`,
      service: service.current,
    } satisfies Reservation;

    try {
      const response = await postReservation(reservation);
      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-5 text-center">Vaše údaje</h2>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-96 mx-auto p-4 bg-white text-black"
      >
        <input
          onChange={(e) => (givenName.current = e.target.value)}
          type="text"
          placeholder="Jméno"
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (familyName.current = e.target.value)}
          type="text"
          placeholder="Příjmení"
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (email.current = e.target.value)}
          type="text"
          placeholder="E-mail"
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (telNumber.current = e.target.value)}
          type="text"
          placeholder="Tel. č."
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (vehicleModel.current = e.target.value)}
          type="text"
          placeholder="Model vozidla"
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (spz.current = e.target.value)}
          type="text"
          placeholder="SPZ"
          className="input input-bordered mb-4"
        />
        <input
          onChange={(e) => (service.current = e.target.value)}
          type="text"
          placeholder="Služba"
          className="input input-bordered mb-4"
        />
        <button
          type="submit"
          className="inline-block mt-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200"
        >
          Rezervovat
        </button>
      </form>
    </>
  );
}
