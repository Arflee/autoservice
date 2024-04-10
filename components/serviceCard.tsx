import { Service } from "@/app/lib/definitions";
import Image from "next/image";

export default function ServiceCard({service}: {service: Service}) {
  return (
    <div className="card card-compact w-75 h-auto m-4 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={service.image_url}
          alt="Service image"
          width={512}
          height={512}
          priority={true}
        />
      </figure>
      <div className="card-body overflow-hidden min-h-0">
        <h2 className="card-title">{service.name}</h2>
        <p className="text-pretty">
          {service.description}
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">{service.short_button_text}</button>
        </div>
      </div>
    </div>
  );
}
