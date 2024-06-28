class Vehicle {
  constructor(readonly model: string, readonly plate: string) {}
}

interface VehicleRepository {
  save(vehicle: Vehicle): Promise<any>;
}

class VehicleRepositoryInMemory implements VehicleRepository {
  private vehicles: Vehicle[];
  static instance: VehicleRepositoryInMemory;

  private constructor() {
    this.vehicles = [];
  }

  async save(vehicle: Vehicle): Promise<void> {
    await this.vehicles.push(vehicle);
  }

  static getInstance() {
    if (!VehicleRepositoryInMemory.instance) {
      VehicleRepositoryInMemory.instance = new VehicleRepositoryInMemory();
    }

    return VehicleRepositoryInMemory.instance;
  }
}
