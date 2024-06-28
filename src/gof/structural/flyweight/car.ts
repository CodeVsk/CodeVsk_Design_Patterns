import { CarType } from "./car-flyweight";

export class Characteristics {
  constructor(readonly doors: number, readonly fuelType: string) {}
}

export const VehicleCharacteristics: CarType = {
  popular: new Characteristics(4, "gasoline"),
  sport: new Characteristics(2, "gasoline"),
  offroad: new Characteristics(4, "diesel"),
};

export class Car {
  constructor(
    readonly model: string,
    readonly color: string,
    private characteristics?: Characteristics
  ) {}

  setCharacteristics(characteristics: Characteristics): void {
    this.characteristics = characteristics;
  }

  getCharacteristics(): Characteristics | undefined {
    return this.characteristics;
  }
}
