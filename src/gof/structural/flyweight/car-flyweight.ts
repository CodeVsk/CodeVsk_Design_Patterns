import { Car, Characteristics, VehicleCharacteristics } from "./car";

export type CarType = { [key: string]: Characteristics };

export class CarFlyweight {
  private cache: CarType = {};

  make(data: Car) {
    const key = data.model;
    if (key in this.cache) return this.cache[key];
    this.cache[key] = VehicleCharacteristics[key];
    return this.cache[key];
  }
}
