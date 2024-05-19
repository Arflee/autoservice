export const dynamic = 'force-dynamic'

import ServiceCard from "@/components/serviceCard";
import Image from "next/image";
import Link from "next/link";
import { ServiceApiResolver } from "./lib/serviceApiResolver";
import { ServiceDAOPrisma } from "./lib/serviceDAOPrisma";

export default async function Home() {
  const serviceResolver = new ServiceApiResolver(new ServiceDAOPrisma());
  const services = await serviceResolver.fetchServices();
  const firstThreeServices = services.slice(0, 3);

  return (
    <main>
      <div className="relative mb-10">
        <div className="brightness-50 ">
          <Image
            src="/homepage.jpg"
            alt="Car Service Shop Image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-1/3 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-3xl font-bold">Kvalitní servis pro váš vůz na Praze 6</h1>
          <Link href="/reservation" className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
            Rezervovat termín
          </Link>
        </div>
      </div>
     
      <div className="text-center m-10">
        <Link href="/reservation" className="inline-block  text-xl px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
          Rychlé objednání do autoservisu – tel: 111 222 333 nebo využijte online rezervaci.
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">S čím vám můžeme pomoci?</h2>
      <div className="grid grid-cols-7 mx-10">
        {firstThreeServices.map((el) => (
          <div className="col-span-2"  key={el.id_sluzba}>
          <ServiceCard service={el}/>
          </div>
        ))}
        <div className="my-auto">
        <Link href="/services" className="inline-block text-xl px-6 py-8 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200 mx-5">
          Další služby..
        </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto m-8">
        <h2 className="text-3xl font-bold mb-4 text-center">O nás</h2>
        <p className="text-lg mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor feugiat felis sagittis cursus. Duis nunc nisi, varius eu nibh a, volutpat facilisis eros. Sed quis imperdiet libero. Vivamus varius arcu et est dignissim, eu semper erat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Cras nec consectetur erat. Sed semper iaculis orci, vitae sodales nibh hendrerit et. Nunc tristique leo sed est tristique, non tempor lectus elementum.
        </p>
        <p className="text-lg mb-5">
          Duis ultricies ullamcorper quam eget condimentum. Mauris non tristique turpis, quis auctor odio. Cras fringilla leo ut nisl tempus, ac condimentum ligula rutrum. Maecenas non dictum tortor. Vestibulum efficitur lectus sit amet odio commodo, nec imperdiet justo sollicitudin. Quisque nec mollis mi. Donec vitae diam sed sapien gravida pulvinar. Pellentesque quis ligula rutrum, suscipit erat et, porttitor ex.
        </p>

      </div>
    </main>
  );
}
