import { prisma } from "./data";
import { ServiceDAO } from "./serviceDAO";
import { sluzba } from "@prisma/client";

/**
 * @description Implementation of ServiceDAO interface to use Prisma for database connection
 */
export class ServiceDAOPrisma implements ServiceDAO {
    public async GetAllServices(): Promise<sluzba[]> {
        const services = await prisma.sluzba.findMany()
        return services
    }

}