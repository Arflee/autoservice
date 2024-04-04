import ServiceCard from "@/components/serviceCard";

export default function Page()
{
    //todo make cards grid with all available services
    return (
        <main className="grid grid-cols-4">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </main>
    );
}