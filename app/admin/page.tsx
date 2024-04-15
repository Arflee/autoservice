import LogOutButton from "@/components/logOutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <p>Admin Panel</p>
      <p>
        There will be all the incoming reservations and admin can give them an
        assignee
      </p>
      <p>Mechanics will se all their assigned reservations in the future</p>
      <LogOutButton/>
    </main>
  );
}
