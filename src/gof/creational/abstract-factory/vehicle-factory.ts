import Vehicle, { CarVehicle, MotorcycleVehicle } from "./vehicle";

export default interface VehicleFactory {
  createVehicle(fuel: number, fuelType: string): Vehicle;
}

export class CarVehicleFactory implements VehicleFactory {
  createVehicle(fuel: number, fuelType: string): Vehicle {
    return CarVehicle.create(fuel, fuelType);
  }
}

export class MotorcycleVehicleFactory implements VehicleFactory {
  createVehicle(fuel: number, fuelType: string): Vehicle {
    return MotorcycleVehicle.create(fuel, fuelType);
  }
}
