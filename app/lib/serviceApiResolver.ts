import { ServiceDAO } from "./serviceDAO";

/**
 * @description Class uses pattern Strategy to use different connection methods to database
 * To change DAO class, you need to implement its interface and pass to ApiResolver
*/
export class ServiceApiResolver {
  private serviceDao: ServiceDAO;

  constructor(daoInterface: ServiceDAO) {
    this.serviceDao = daoInterface;
  }

  public async fetchServices() {
    try {
      const data = await this.serviceDao.GetAllServices();
      return data;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch service data.");
    }
  }
}
