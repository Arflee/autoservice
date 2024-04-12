'use client'

import { redirect } from "next/dist/server/api-utils";

function submit() {
  //TODO: check credentials in the DB, if correct redirect to admin
}

export default function LoginForm() {
  return (
    <form
      onSubmit={submit}
      className="flex flex-col w-64 mx-auto p-4 rounded-lg shadow-md bg-blue-200 mt-[10%] mb-[10%]"
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
