export const dynamic = 'force-dynamic'

import { redirect } from "next/navigation";
import LogOutButton from "@/components/logOutButton";
import Link from "next/link";
import { prisma } from "@/app/lib/data-mapper";
import { fetchServices } from "@/app/lib/data";
import { osoba, sluzba } from "@prisma/client";

const placeholderServices = [
  {
    id: 1,
    name: "Výměna oleje",
  },
  {
    id: 2,
    name: "Přezutí pneumatik",
  },
  {
    id: 3,
    name: "Diagnostika",
  },
];

const isManager = () => {
  //TODO: replace with actual function checking if the logged in user is mechanic or manager
  return true;
};

const addService = () => {
  //TODO: replace with actual add to the db
};

const deleteService = (id: number) => {
  // TODO: replace with actual delete logic
  console.log(`Deleting service with ID ${id}`);
};

const editService = (id: number) => {
  // TODO: replace this with actual edit logic
  console.log(`Editing service with ID ${id}`);
};
export default async function Home() {
  const fetchedServices = await fetchServices() as osoba[];
  if (!isManager) {
    redirect("admin");
  }

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
      <form className="flex flex-col w-96 mx-auto p-4 text-black border-2 mb-5">
        <input
          type="text"
          placeholder="Název služby"
          className="input input-bordered mb-4"
        />
        <label className="text-white">Obrázek služby:</label>
        <input type="file" className="mb-4 text-white"></input>
        {//<button
         // onClick={() => addService()}
          //className="inline-block mb-5 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200"
        //>
      }
          Přidat službu
        {//</button>
        }
      </form>
      <h1 className="text-xl text-center mb-5">Nabízené služby:</h1>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Název služby</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fetchedServices.map((service) => (
            <tr key={service.osobaid}>
              <td>{service.jmeno}</td>
              <td>
                {//<button onClick={() => deleteService(service.sluzbaid)}>
}
                  Smazat
                {//</button>
                }
                {//<button onClick={() => editService(service.sluzbaid)}>
}
                  Změnit
                {//</button>
}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
