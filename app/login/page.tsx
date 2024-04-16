"use client";

import { signIn } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

export default function Page(props: Props) {
  const path = usePathname()
  const router = useRouter();
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      redirect: false,
    }).then((res) => {if(res?.ok) router.push('/admin')});

  };
  return (
    <div className={props.className}>
      <h2 className="text-3xl font-bold m-20 text-center">Vstup do zaměstnanecké zóny</h2>
      {!!props.error && (
        <p className="bg-red-100 text-red-600 text-center p-2">
          Authentication Failed
        </p>
      )}
    <form onSubmit={onSubmit}
      className="flex flex-col w-64 mx-auto p-4 rounded-lg shadow-md bg-white mb-[10%]"
    >
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="input input-bordered mb-2"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="input input-bordered mb-4"
        onChange={(e) => (pass.current = e.target.value)}
      />
      <button type="submit" className="inline-block mt-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
        Login
      </button>
    </form>
    </div>
  );
}
