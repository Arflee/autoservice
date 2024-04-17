'use client';

import { useState, useEffect } from 'react';

const placeholderServices = [
    {
        id: 1,
        name: 'Výměna oleje'
    },
    {
        id: 2,
        name: 'Přezutí pneumatik'
    },
    {
        id: 3,
        name: 'Diagnostika'
    },
];

const fetchServices = async () => {
    //TODO: replace with actual fetching services from db 
    return new Promise<{ id: number; name: string; }[]>((resolve) => {
        resolve(placeholderServices);
    });
};

const addService = () => {
    //TODO: replace with actual add to the db
}

const deleteService = (id: number) => {
    // TODO: replace with actual delete logic
    console.log(`Deleting service with ID ${id}`);
};

const editService = (id: number) => {
    // TODO: replace this with actual edit logic
    console.log(`Editing service with ID ${id}`);
};

export default function Home() {
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchServices();
            setServices(data);
        };
        fetchData();
    }, []);

    return (
        <main className='text-center'>
            <h1 className='text-3xl text-center  mt-10 mb-10'>Tuhle stránku  má vidět pouze manažer</h1>
                <form className='flex flex-col w-96 mx-auto p-4 text-black border-2 mb-5'>
                    <input type="text" placeholder="Název služby" className="input input-bordered mb-4" />
                    <label className='text-white'>Obrázek služby:</label>
                    <input type="file" className="mb-4 text-white"></input>
                    <button onClick={() => addService()} className="inline-block mb-5 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">Přidat službu</button>
                </form>
                <h1 className='text-xl text-center mb-5'>Nabízené služby:</h1>
                <table className='mx-auto'>
                    <thead>
                        <tr>
                            <th>Název služby</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td><button onClick={() => deleteService(service.id)}>Smazat</button>
                                <button onClick={() => editService(service.id)}>Změnit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </main>
    );
}