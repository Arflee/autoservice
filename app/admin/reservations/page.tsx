'use client';

import { useState, useEffect } from 'react';


const isManager = () => {
    //TODO: replace with actual function checking if the logged in user is mechanic or manager
    return true;
};

const addReservation = ()=>{
    //TODO: replace with actual function adding new reservation to the database
}

const formatDateTime = (dateTime: Date) => {
    return dateTime.toLocaleString('cs-CZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
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

const placeholderServices = [
    {
        id: 1,
        name: 'Výměna oleje'
    },
    {
        id: 2,
        name: 'Přezutí pneumatik'
    },
    {
        id: 3,
        name: 'Diagnostika'
    },
];

const fetchServices = async () => {
    //TODO: replace with actual fetching services from db 
    return new Promise<{ id: number; name: string; }[]>((resolve) => {
        resolve(placeholderServices);
    });
};

const fetchMechanicReservations = async (id: number) => {
    //TODO: replace with actual fetching reservations from db based on mechanic id, ordered by date and time 
    return new Promise<{ id: number; dateTime: Date; firstName: string; lastName: string; phoneNumber: string; email: string; carModel: string; serviceType: string; }[]>((resolve) => {
        resolve(placeholderReservations);
    });
};

const fetchReservationsWithoutAssignee = async () => {
    //TODO: replace with actual fetching reservations from db where mechanicID == null, ordered by date and time 
    return new Promise<{ id: number; dateTime: Date; firstName: string; lastName: string; phoneNumber: string; email: string; carModel: string; serviceType: string; }[]>((resolve) => {
        resolve(placeholderReservations);
    });
};

function MechanicPage() {
    const [reservations, setReservations] = useState<any[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await fetchMechanicReservations(1);
            setReservations(data);
        };
        fetchReservations();
    }, []);


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

const ManagerPage = () => {
    const [reservations, setReservations] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchServices();
            setServices(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await fetchReservationsWithoutAssignee();
            setReservations(data);
        };
        fetchReservations();
    }, []);

    const deleteReservation = (id: number) => {
        // TODO: replace with actual delete logic
        setReservations(reservations.filter(reservation => reservation.id !== id));
    };

    const editReservation = (id: number) => {
        // TODO: replace this with actual edit logic
        console.log(`Editing reservation with ID ${id}`);
    };

    const assignReservation = (reservationID: number, mechanicID: number) => {
        // TODO: replace this with actual assign logic
        console.log(`Assigning reservation with ID ${reservationID} to mechanic with ID ${mechanicID}`);
    };
    return (
        <div className='text-center'>
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
                        <option key={service.id} value={service.id}>{service.name}</option>
                            
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
                        <tr key={reservation.id}>
                            <td>{formatDateTime(reservation.dateTime)}</td>
                            <td>{reservation.firstName}</td>
                            <td>{reservation.lastName}</td>
                            <td>{reservation.phoneNumber}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.carModel}</td>
                            <td>{reservation.serviceType}</td>
                            <td>
                                <button onClick={() => deleteReservation(reservation.id)}>Smazat</button>
                                <button onClick={() => editReservation(reservation.id)}>Změnit</button>
                                <button onClick={() => assignReservation(reservation.id, 1)}>Přidělit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default function HomePage() {
    return (
        <main>
            {isManager() ? <ManagerPage /> : <MechanicPage />}
        </main>
    );
}
