'use client';

import {sluzba } from "@prisma/client";

const deleteService = (id: number) => {
    // TODO: replace with actual delete logic
    console.log(`Deleting service with ID ${id}`);
};

const editService = (id: number) => {
    // TODO: replace this with actual edit logic
    console.log(`Editing service with ID ${id}`);
};

export default function adminServicesTable({ services }: { services: sluzba[] }) {
    return (
        <table className="mx-auto">
        <thead>
            <tr>
                <th>Název služby</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {services.map((service) => (
                <tr key={service.id_sluzba}>
                    <td>{service.nazev}</td>
                    <td>
                        <button onClick={() => deleteService(service.id_sluzba)}>
                            Smazat
                        </button>
                        <button onClick={() => editService(service.id_sluzba)}>
                            Změnit
                        </button>

                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    );
    
}