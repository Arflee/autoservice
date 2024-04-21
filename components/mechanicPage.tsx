'use client'

import { useState } from "react";
import LogOutButton from "./logOutButton";
import { rezervace } from "@prisma/client";
import { formatDateTime } from "@/app/lib/data";

export default function MechanicPage(props: any) {
    const [reservations, setReservations] = useState<rezervace[]>([]);

    return (
        <div className='text-center'>
            <div className="text-xl p-2 bg-stone-300 mb-10">
                <LogOutButton />
            </div>
            <h1 className='text-3xl text-center mb-10'>Mechanikova stránka:</h1>
            <h1 className='text-xl text-center mb-10'>Vaše přidělené rezervace</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id_rezervace}>
                            <td>{reservation.cas}</td>
                            <td>{reservation.id_vozidlo}</td>
                            <td>{reservation.id_mechanik}</td>
                            <td>{reservation.datum}</td>
                            {//<td>{reservation.carModel}</td>
                            //<td>{reservation.serviceType}</td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
