export const dynamic = 'force-dynamic'

import ServiceCard from "@/components/serviceCard";
import { ServiceApiResolver } from "../lib/serviceApiResolver";
import { ServiceDAOPrisma } from "../lib/serviceDAOPrisma";


export default async function Page() {
  const serviceResolver = new ServiceApiResolver(new ServiceDAOPrisma());
  const services = await serviceResolver.fetchServices();
  
  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Naše služby</h1>
      <div className="grid grid-cols-4">
      {services.map((service)=>(
        <ServiceCard key={service.id_sluzba} service={service}/>
      ))}
      </div>
    </main>
  );
}
