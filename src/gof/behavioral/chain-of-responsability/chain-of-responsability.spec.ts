import Parking from "./parking";
import {
  AfternoonFareCalculator,
  EveningFareCalculator,
  MorningFareCalculator,
} from "./fare-calculator";

let parking: Parking;

beforeEach(() => {
  const eveningFeeCalculator = new EveningFareCalculator();
  const afternoonFeeCalculator = new AfternoonFareCalculator(
    eveningFeeCalculator
  );
  const morningFeeCalculator = new MorningFareCalculator(
    afternoonFeeCalculator
  );

  parking = new Parking(morningFeeCalculator);
});

test("Deve calcular o valor do estacionamento para moto no periodo da manhã", () => {
  parking.addRule("motorcycle", new Date("2024-06-24T07:00:00"), 15);
  parking.calculate();
  expect(parking.getFee()).toBe(21);
});
