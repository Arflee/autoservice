export default function ReservationForm() {
    return(
        <form className="flex flex-col w-96 mx-auto p-4 bg-white text-black">
        <input type="text" placeholder="Jméno" className="input input-bordered mb-4" />
        <input type="text" placeholder="Příjmení" className="input input-bordered mb-4" />
        <input type="text" placeholder="E-mail" className="input input-bordered mb-4" />
        <input type="text" placeholder="Tel. č." className="input input-bordered mb-4" />
        <input type="text" placeholder="Model vozidla" className="input input-bordered mb-4" />
        <input type="text" placeholder="SPZ" className="input input-bordered mb-4" />
        <button type="submit" className="inline-block mt-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
          Rezervovat
        </button>
      </form>
    );
}