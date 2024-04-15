import LoginForm from "@/components/loginForm";

export default function Home() {
    return (
      <main className="mt-10 mb-[15%]">
        <h2 className="text-3xl font-bold mb-20 text-center">Vstup do zaměstnanecké zóny</h2>
        <LoginForm/>
      </main>
    );
  }