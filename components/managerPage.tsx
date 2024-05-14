"use client";

import Link from "next/link";
import LogOutButton from "./logOutButton";
import { sluzba } from "@prisma/client";
import { formatDateTime } from "@/app/lib/data";

export default function ManagerPage({
  services,
  reservations,
}: {
  services: sluzba[];
  reservations: any[];
}) {
  return (
    <div className="text-center">
      <div className="flex justify-between px-[20%] text-xl pt-5 pb-2 bg-stone-300">
        <div>
          <Link href="admin" className="bg-stone-500 p-2 mx-4">
            Rezervace
          </Link>
          <Link href="/admin/services" className="text-black">
            Služby
          </Link>
        </div>
        <LogOutButton />
      </div>
      <h1 className="text-3xl text-center my-10">Manažerova stránka:</h1>
      <form className="flex flex-col w-96 mx-auto p-4 text-black border-2 mb-10">
        <input
          type="text"
          placeholder="Jméno"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="Příjmení"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="Tel"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="Model auta"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="SPZ"
          className="input input-bordered mb-4"
        />
        <select required className="mb-4">
          <option value="">Objednaná služba</option>
          {services.map((service) => (
            <option key={service.id_sluzba} value={service.id_sluzba}>
              {service.nazev}
            </option>
          ))}
        </select>

        <button
          className="inline-block mb-5 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200"
        >
          Přidat rezervaci
        </button>
      </form>
      <h1 className="text-xl text-center mb-10">
        Rezervace bez přiděleného mechanika
      </h1>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Termín</th>
            <th>Jméno</th>
            <th>Příjmení</th>
            <th>Tel</th>
            <th>Email</th>
            <th>Model auta</th>
            <th>Objednaná služba</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{formatDateTime(new Date(reservation.datum))}</td>
              <td>{reservation.givenname}</td>
              <td>{reservation.familyname}</td>
              <td>{reservation.telnumber}</td>
              <td>{reservation.email}</td>
              <td>{reservation.vehiclemodel}</td>
              <td>{reservation.service}</td>
              <td>
                <button >
                  Smazat
                </button>
                <button >
                  Změnit
                </button>
                <button >
                  Přidělit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
