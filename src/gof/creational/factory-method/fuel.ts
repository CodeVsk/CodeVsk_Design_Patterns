export default class Fuel {
  constructor(readonly fuelType: string, readonly fuelPrice: number) {}

  getPrice(): number {
    return this.fuelPrice;
  }
}
