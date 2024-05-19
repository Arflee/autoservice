export const dynamic = 'force-dynamic'

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import MechanicPage from "@/components/mechanicPage";
import ManagerPage from "@/components/managerPage";
import { User } from "../lib/definitions";
import { ServiceApiResolver } from "../lib/serviceApiResolver";
import { ServiceDAOPrisma } from "../lib/serviceDAOPrisma";
import { ReservationApiResolver } from "../lib/reservationApiResolver";
import { ReservationDAOPrisma } from "../lib/reservationDAOPrisma";

export default async function Home() {
    const session = await getServerSession(authOptions)
    const user = session?.user as User;
  
    if (!session)
    {
        redirect('/login')
    }

    const serviceResolver = new ServiceApiResolver(new ServiceDAOPrisma());
    const reservationResolver = new ReservationApiResolver(new ReservationDAOPrisma());

    const services = await serviceResolver.fetchServices();
    const reservations = await reservationResolver.fetchReservationList();
    
    return (
        <main>
            {user.isManager ? <ManagerPage services={services} reservations={reservations} /> : <MechanicPage />}
        </main>
    );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       