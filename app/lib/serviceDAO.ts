import { sluzba } from "@prisma/client";

/**
 * @interface
 * @description This interface used on admin panel to get info about all available services
 */
export interface ServiceDAO {
    GetAllServices() : Promise<sluzba[]>;
}