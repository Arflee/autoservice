import { sluzba } from "@prisma/client";

export interface ServiceDAO {
    GetAllServices() : Promise<sluzba[]>;
}