import Rule from "./rule";

export default interface FareCalculator {
  next?: FareCalculator;
  calculate(rule: Rule): number;
}

export class MorningFareCalculator implements FareCalculator {
  FARE = 1.4;

  constructor(readonly next?: FareCalculator) {}

  calculate(rule: Rule): number {
    if (!rule.isAfternoon() && !rule.isEvening()) {
      return rule.fare * this.FARE;
    }
    if (!this.next) throw new Error();
    return this.next.calculate(rule);
  }
}

export class AfternoonFareCalculator implements FareCalculator {
  FARE = 1.3;

  constructor(readonly next?: FareCalculator) {}

  calculate(rule: Rule): number {
    if (rule.isAfternoon() && !rule.isEvening()) {
      return rule.fare * this.FARE;
    }
    if (!this.next) throw new Error();
    return this.next.calculate(rule);
  }
}

export class EveningFareCalculator implements FareCalculator {
  FARE = 2;

  constructor(readonly next?: FareCalculator) {}

  calculate(rule: Rule): number {
    if (!rule.isAfternoon() && rule.isEvening()) {
      return rule.fare * this.FARE;
    }
    if (!this.next) throw new Error();
    return this.next.calculate(rule);
  }
}
