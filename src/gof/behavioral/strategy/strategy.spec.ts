import { EParkingType, ParkingFareFactory } from "./parking-calculator";

test("Devo calcular o valor da tarifa para estacionar em um estacionamento privado", () => {
  const parking_private = ParkingFareFactory.create(EParkingType.private);

  const checkin: Date = new Date("2024-06-19T10:00:00");
  const checkout: Date = new Date("2024-06-19T11:00:00");

  const fare = parking_private.calculate(checkin, checkout);

  expect(fare).toBe(12);
});
