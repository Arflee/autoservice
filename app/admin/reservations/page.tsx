'use client';

import { useState, useEffect } from 'react';


const isManager = () => {
    //TODO: replace with actual function checking if the logged in user is mechanic or manager
    return false;
};

const placeholderReservations = [
    {
        id: 1,
        dateTime: new Date('2024-04-17T10:00:00'),
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123456789',
        email: 'john@example.com',
        carModel: 'Toyota Camry',
        serviceType: 'Výměna oleje',
    },
    {
        id: 2,
        dateTime: new Date('2024-04-17T14:00:00'),
        firstName: 'Jane',
        lastName: 'Doe',
        phoneNumber: '987654321',
        email: 'jane@example.com',
        carModel: 'Honda Civic',
        serviceType: 'Přezutí pneumatik',
    },
    {
        id: 3,
        dateTime: new Date('2024-04-18T11:30:00'),
        firstName: 'Alice',
        lastName: 'Smith',
        phoneNumber: '456789123',
        email: 'alice@example.com',
        carModel: 'Ford Focus',
        serviceType: 'Diagnostika',
    },
];

const fetchMechanicReservations = async () => {
    //TODO: replace with actual fetching reservations from db, ordered by date and time 
    return new Promise<{ id: number; dateTime: Date; firstName: string; lastName: string; phoneNumber: string; email: string; carModel: string; serviceType: string; }[]>((resolve) => {
        resolve(placeholderReservations);
    });
};

const ManagerPage = () => {
    return <h1>Welcome Manager!</h1>;
};

function MechanicPage() {
    const [reservations, setReservations] = useState<any[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await fetchMechanicReservations();
            setReservations(data);
        };
        fetchReservations();
    }, []);

    const formatDateTime = (dateTime: Date) => {
        return dateTime.toLocaleString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    };

    return (
        <div>
            <h1 className='text-3xl text-center  mb-10'>Mechanikova stránka:</h1>
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
                        <tr key={reservation.id}>
                            <td>{formatDateTime(reservation.dateTime)}</td>
                            <td>{reservation.firstName}</td>
                            <td>{reservation.lastName}</td>
                            <td>{reservation.phoneNumber}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.carModel}</td>
                            <td>{reservation.serviceType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function HomePage() {
    return (
        <main>
            {isManager() ? <ManagerPage /> : <MechanicPage />}
        </main>
    );
}
