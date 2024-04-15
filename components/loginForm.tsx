'use client'

import { redirect } from "next/dist/server/api-utils";

function submit() {
  //TODO: check credentials in the DB, if correct redirect to admin
}

export default function LoginForm() {
  return (
    <form
      onSubmit={submit}
      className="flex flex-col w-64 mx-auto p-4 rounded-lg shadow-md bg-white m-10"
    >
      <input
        type="text"
        placeholder="Username"
        className="input input-bordered mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered mb-4"
      />
      <div className="flex justify-between flex-col mb-4">
        <button type="submit" className="inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
          Login
        </button>
      </div>
    </form>
  );
}
