export default abstract class Vehicle {
  abstract price: number;

  constructor(
    readonly vehicleId: string,
    readonly fuel: number,
    readonly fuelType: string,
    readonly vehicleModel: string
  ) {}

  static create(fuel: number, fuelType: string) {}
}

export class CarVehicle extends Vehicle {
  price: number = 20000;

  constructor(vehicleId: string, fuel: number, fuelType: string) {
    super(vehicleId, fuel, fuelType, "car");

    if (fuel > 20) throw new Error("fuel limit exceeded");
  }

  static create(fuel: number, fuelType: string): CarVehicle {
    const vehicleId = crypto.randomUUID();

    return new CarVehicle(vehicleId, fuel, fuelType);
  }
}

export class MotorcycleVehicle extends Vehicle {
  price: number = 10000;

  constructor(vehicleId: string, fuel: number, fuelType: string) {
    super(vehicleId, fuel, fuelType, "motorcycle");

    if (fuel > 12) throw new Error("fuel limit exceeded");
  }

  static create(fuel: number, fuelType: string): MotorcycleVehicle {
    const vehicleId = crypto.randomUUID();

    return new MotorcycleVehicle(vehicleId, fuel, fuelType);
  }
}
