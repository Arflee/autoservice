import { sluzba } from "@prisma/client";

export default function ServiceCard({service}: {service: sluzba}) {
  return (
    <div className="card card-compact w-75 h-auto m-4 bg-base-100 shadow-xl">
      <div className="card-body overflow-hidden min-h-0 text-black">
        <h2 className="card-title">{service.nazev}</h2>
        <p className="text-pretty">
          {service.popis}
        </p>
      </div>
    </div>
  );
}
