import { ServiceDAO } from "./serviceDAO";

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
