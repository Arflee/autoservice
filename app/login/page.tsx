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
      <div className="bg-gradient-to-b  from-slate-50 to-slate-200 p-2 text-center text-slate-600">
        Login Form
      </div>
      {!!props.error && (
        <p className="bg-red-100 text-red-600 text-center p-2">
          Authentication Failed
        </p>
      )}
    <form onSubmit={onSubmit}
      className="flex flex-col w-64 mx-auto p-4 rounded-lg shadow-md bg-blue-200 mt-[10%] mb-[10%]"
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
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
    </div>
  );
}
