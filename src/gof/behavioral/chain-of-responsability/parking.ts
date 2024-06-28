import FareCalculator from "./fare-calculator";
import Rule from "./rule";

export default class Parking {
  private rules: Rule[];
  private fee: number;

  constructor(readonly feeCalculator: FareCalculator) {
    this.rules = [];
    this.fee = 0;
  }

  addRule(type: string, date: Date, fee: number): void {
    this.rules.push(new Rule(type, date, fee));
  }

  calculate(): void {
    this.fee = 0;
    for (const rule of this.rules) {
      this.fee += this.feeCalculator.calculate(rule);
    }
  }

  getFee(): number {
    return this.fee;
  }
}
