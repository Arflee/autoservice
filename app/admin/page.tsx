export const dynamic = 'force-dynamic'

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import MechanicPage from "@/components/mechanicPage";
import ManagerPage from "@/components/managerPage";
import { fetchReseravationList, fetchServices } from "../lib/data";
import { sluzba } from "@prisma/client";
import { User } from "../lib/definitions";

export default async function Home() {
    const session = await getServerSession(authOptions)
    const user = session?.user as User;
  
    if (!session)
    {
        redirect('/login')
    }

    const services = await fetchServices() as sluzba[]
    const reservations = await fetchReseravationList()
    
    return (
        <main>
            {user.isManager ? <ManagerPage services={services} reservations={reservations} /> : <MechanicPage />}
        </main>
    );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       