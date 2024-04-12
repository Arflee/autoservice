import ServiceCard from "@/components/serviceCard";
import { Service } from "./lib/definitions";

const frequentServices: Service[] = [
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/mech.webp",
  },
];

export default function Home() {
  return (
    <main className="m-4">
      <p>Kvalitní servis pro váš vůz na Praze 6</p>
      <p className="text-3xl font-bold">S čím vám můžeme pomoci?</p>
      <div className="grid grid-cols-3">
        {frequentServices.map((el) => (
          <ServiceCard key={el.name} service={el} />
        ))}
      </div>
    </main>
  );
}
