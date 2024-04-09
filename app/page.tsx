import ServiceCard from "@/components/serviceCard";
import { Service } from "./lib/definitions";

const frequentServices: Service[] = [
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/512x256.jpg",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/512x256.jpg",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/512x256.jpg",
  },
  {
    name: "asdasd",
    description: "qweqweqwe",
    short_button_text: "buy",
    image_url: "/512x256.jpg",
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
