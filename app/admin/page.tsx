export const dynamic = 'force-dynamic'

import { redirect, useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import MechanicPage from "@/components/mechanicPage";
import ManagerPage from "@/components/managerPage";
import { fetchReservations, fetchServices } from "../lib/data";
import { rezervace, sluzba } from "@prisma/client";

export default async function Home() {
    const session = getServerSession(authOptions)

    if (!session)
    {
        redirect('/login')
    }

    const services = await fetchServices() as sluzba[]
    const reservations = await fetchReservations() as rezervace[]

    return (
        <main>
            {isManager() ? <ManagerPage services={services} reservations={reservations} /> : <MechanicPage />}
        </main>
    );
}


const isManager = () => {
    //TODO: replace with actual function checking if the logged in user is mechanic or manager
    return true;
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


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       