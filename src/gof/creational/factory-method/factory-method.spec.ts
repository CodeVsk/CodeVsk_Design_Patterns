import Fuel from "./fuel";
import { CarVehicle } from "./vehicle";

test("Calcular valor para abastecer o veiculo com gasolina", () => {
  const fuel: Fuel = new Fuel("gasoline", 3.69);
  const car: CarVehicle = CarVehicle.create(10, "gasoline");

  const fuelPrice: number = car.calculateRefuelingPrice(4, fuel);

  expect(fuelPrice).toBe(14.76);
});
