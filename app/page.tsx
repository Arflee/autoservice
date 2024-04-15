import ServiceCard from "@/components/serviceCard";
import { Service } from "./lib/definitions";
import Image from "next/image";
import Link from "next/link";

const frequentServices: Service[] = [
  {
    name: "asdas",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "asdsd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "sdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "asasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
];

export default function Home() {
  return (
    <main>
      <div className="relative">
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

      <p className="text-3xl font-bold">S čím vám můžeme pomoci?</p>
      <div className="grid grid-cols-3">
        {frequentServices.map((el) => (
          <ServiceCard key={el.name} service={el} />
        ))}
      </div>
    </main>
  );
}
