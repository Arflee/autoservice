'use client'

import Link from "next/link";
import LogOutButton from "./logOutButton";
import { rezervace, sluzba } from "@prisma/client";
import { formatDateTime } from "@/app/lib/data";


const addReservation = () => {
    //TODO: replace with actual function adding new reservation to the database
}


export default function ManagerPage({services, reservations} : {services: sluzba[], reservations: rezervace[]}) {
    return (
        <div className='text-center'>
            <div className="flex justify-between px-[20%] text-xl pt-5 pb-2 bg-stone-300">
                <div>
                    <Link href="admin" className="bg-stone-500 p-2 mx-4">Rezervace</Link>
                    <Link href="/admin/services" className="text-black">Služby</Link>
                </div>
                <LogOutButton />
            </div>
            <h1 className='text-3xl text-center my-10'>Manažerova stránka:</h1>
            <form className='flex flex-col w-96 mx-auto p-4 text-black border-2 mb-10'>
                <input type="text" placeholder="Jméno" className="input input-bordered mb-4" />
                <input type="text" placeholder="Příjmení" className="input input-bordered mb-4" />
                <input type="text" placeholder="Tel" className="input input-bordered mb-4" />
                <input type="text" placeholder="Email" className="input input-bordered mb-4" />
                <input type="text" placeholder="Model auta" className="input input-bordered mb-4" />
                <input type="text" placeholder="SPZ" className="input input-bordered mb-4" />
                <select required className='mb-4'>
                    <option value="">Objednaná služba</option>
                    {services.map((service) => (
                        <option key={service.sluzbaid} value={service.sluzbaid}>{service.nazev}</option>

                    ))}
                </select>


                <button onClick={() => addReservation()} className="inline-block mb-5 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">Přidat rezervaci</button>
            </form>
            <h1 className='text-xl text-center mb-10'>Rezervace bez přiděleného mechanika</h1>
            <table className='mx-auto'>
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
                    {reservations.map((reservation) => (
                        <tr key={reservation.rezervaceid}>
                            <td>{formatDateTime(reservation.datum)}</td>
                            <td>{reservation.mechanikid}</td>
                            <td>{reservation.vozidloid}</td>
                            <td>{reservation.cena}</td>
                            {//<td>{reservation.email}</td>
                            //<td>{reservation.carModel}</td>
                            //<td>{reservation.serviceType}</td>
                            //<td>
                              //  <button onClick={() => deleteReservation(reservation.id)}>Smazat</button>
                                //<button onClick={() => editReservation(reservation.id)}>Změnit</button>
                                //<button onClick={() => assignReservation(reservation.id, 1)}>Přidělit</button>
                            //</td>
}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}