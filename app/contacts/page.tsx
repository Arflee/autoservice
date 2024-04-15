import Link from "next/link";

export default function Page() {
    return (
        <main className="mb-[11%]">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-10 text-center">Kontakty</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <iframe
                            className="w-full h-80"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0001259429773!2d14.386862876813227!3d50.105004612176096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b953a124e3999%3A0x8eb9c6f77808fa69!2sFakulta%20informa%C4%8Dn%C3%ADch%20technologi%C3%AD%20%C4%8CVUT%20v%20Praze!5e0!3m2!1sen!2sus!4v1713181422433!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <p className="mb-5">
                            <strong className="text-xl">Autoservis SWI</strong>
                            <br />Thákurova 9
                            <br />160 00 Praha 6
                            <br /><strong>PO - PÁ</strong>: 8:00 - 17:00 hod
                        </p>
                        <p className="mb-5">
                            <strong>E-mail</strong>:
                            objednavky@swi.cz
                        </p>
                        <p className="mb-10">
                            <strong>Tel</strong>:
                            111 222 333
                        </p>
                        <p>
                            <Link href="/reservation" className="inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-200">
                                Online rezervace
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}