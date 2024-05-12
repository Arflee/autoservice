export const dynamic = 'force-dynamic'

import ServiceCard from "@/components/serviceCard";
import { fetchServices } from "../lib/data";
import { sluzba } from "@prisma/client";


export default async function Page() {
  const services = await fetchServices() as sluzba[];
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
