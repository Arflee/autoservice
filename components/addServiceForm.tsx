'use client';

const addService = () => {
    //TODO: replace with actual add to the db (ServiceDAO.addService(Service('name', 'price')))
};

export default function AddServiceForm() {
    return (
        <form className="flex flex-col w-96 mx-auto p-4 text-black border-2 mb-5">
        <input
          type="text"
          placeholder="Název služby"
          className="input input-bordered mb-4"
        />
        <button
          onClick={() => addService()}
          className="inline-block mb-5 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200"
        >
          Přidat službu
        </button>
      </form>
    );
}