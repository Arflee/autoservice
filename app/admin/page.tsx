export const dynamic = 'force-dynamic'

import { redirect, useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import MechanicPage from "@/components/mechanicPage";
import ManagerPage from "@/components/managerPage";
import { fetchReseravationList, fetchReservations, fetchServices } from "../lib/data";
import { rezervace, sluzba } from "@prisma/client";
import { Reservation, User } from "../lib/definitions";

export default async function Home() {
    const session = await getServerSession(authOptions)
    const user = session?.user as User;
  
    if (!session)
    {
        redirect('/login')
    }

    const services = await fetchServices() as sluzba[]
    const reservations = await fetchReseravationList()
    console.log(reservations)
    return (
        <main>
            {user.isManager ? <ManagerPage services={services} reservations={reservations} /> : <MechanicPage />}
        </main>
    );
}


const isManager = () => {
    //TODO: replace with actual function checking if the logged in user is mechanic or manager
    return true;
};


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       