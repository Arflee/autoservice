import { Service } from "@/app/lib/definitions";
import Image from "next/image";

export default function ServiceCard({service}: {service: Service}) {
  return (
    <div className="card card-compact w-75 h-auto m-4 bg-base-100 shadow-xl">
      <div className="card-body overflow-hidden min-h-0 text-black">
        <h2 className="card-title">{service.name}</h2>
        <p className="text-pretty">
          {service.description}
        </p>
      </div>
    </div>
  );
}
