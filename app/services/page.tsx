import ServiceCard from "@/components/serviceCard";
import { Service } from "../lib/definitions";

const testService: Service = {
  //should fetch from db (Service[] services = ServiceDAO.getAllServices())
  name: "Test",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula tempor, suscipit lacus et, laoreet du",
  short_button_text: "Buy",
};

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-20 text-center">Naše služby</h1>
      <div className="grid grid-cols-4">
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
        <ServiceCard service={testService} />
      </div>
    </main>
  );
}
