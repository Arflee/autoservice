'use client'

import { signOut } from "next-auth/react";

export default function LogOutButton()
{
    return (
        <button onClick={() => signOut()} className="btn btn-primary">LogOut</button>
    )
}