import Fuel from "./fuel";

export default abstract class Vehicle {
  fuel: number;

  constructor(
    readonly vehicleId: string,
    readonly initalFuel: number,
    readonly fuelType: string
  ) {
    this.fuel = initalFuel;
  }

  abstract calculateRefuelingPrice(quantity: number, fuel: Fuel): number;
}

export class CarVehicle extends Vehicle {
  calculateRefuelingPrice(quantity: number, fuel: Fuel): number {
    return quantity * fuel.getPrice();
  }

  static create(initialFuel: number, fuelType: string): CarVehicle {
    const vehicleId = crypto.randomUUID();

    return new CarVehicle(vehicleId, initialFuel, fuelType);
  }
}
