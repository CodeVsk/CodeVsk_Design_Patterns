export default class Rule {
  constructor(
    readonly type: string,
    readonly date: Date,
    readonly fare: number
  ) {
    if (!this.isValidVehicle()) throw new Error("Vehicle invalid!");
    if (!this.isValidDate()) throw new Error("Date invalid!");
    if (!this.isOpenned()) throw new Error("Parking is closed!");
  }

  isValidDate(): boolean {
    return (
      this.date != null &&
      this.date != undefined &&
      this.date instanceof Date &&
      this.date.toString() !== "Invalid Date"
    );
  }

  isValidVehicle(): any {
    const vehicles: string[] = ["car", "motorcycle"];

    return vehicles.find((vehicle) => vehicle == this.type);
  }

  isOpenned(): boolean {
    return this.date.getHours() <= 20 && this.date.getHours() >= 7;
  }

  isAfternoon(): boolean {
    return this.date.getHours() >= 12 && this.date.getHours() <= 17;
  }

  isEvening(): boolean {
    return this.date.getHours() >= 18 && this.date.getHours() <= 20;
  }
}
