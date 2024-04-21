import { prisma } from "./data";
import { ServiceDAO } from "./serviceDAO";
import { sluzba } from "@prisma/client";

export class ServiceDAOPrisma implements ServiceDAO {
    public async GetAllServices(): Promise<sluzba[]> {
        const services = await prisma.sluzba.findMany()
        return services
    }

}