export const dynamic = 'force-dynamic'

import LogOutButton from "@/components/logOutButton";
import Link from "next/link";
import AddServiceForm from "@/components/addServiceForm";
import { ServiceApiResolver } from "@/app/lib/serviceApiResolver";
import { ServiceDAOPrisma } from "@/app/lib/serviceDAOPrisma";

export default async function Home() {
  const serviceResolver = new ServiceApiResolver(new ServiceDAOPrisma());
  const services = await serviceResolver.fetchServices();

  return (
    <main className="text-center">
      <div className="flex justify-between px-[20%] text-xl pt-5 pb-2 bg-stone-300">
        <div>
          <Link href="/admin" className="text-black">
            Rezervace
          </Link>
          <Link href="/admin/services" className="bg-stone-500 p-2 mx-4">
            Služby
          </Link>
        </div>
        <LogOutButton />
      </div>
      <h1 className="text-3xl text-center  mt-10 mb-10">
        Tuhle stránku má vidět pouze manažer
      </h1>
      <AddServiceForm/>
      <h1 className="text-xl text-center mb-5">Nabízené služby:</h1>
      {services.map((service) => (
            <option key={service.id_sluzba} value={service.id_sluzba}>
              {service.nazev}
            </option>
          ))}
    </main>
  );
}
