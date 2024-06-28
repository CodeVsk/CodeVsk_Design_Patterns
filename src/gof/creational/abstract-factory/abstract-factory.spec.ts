import { CarVehicle } from "./vehicle";
import { CarVehicleFactory } from "./vehicle-factory";

test("Criar carro utilizando abstract factory", () => {
  const carVehicleFactory = new CarVehicleFactory();
  const car: CarVehicle = carVehicleFactory.createVehicle(17, "gasoline");

  expect(car.vehicleModel).toBe("car");
  expect(car.fuelType).toBe("gasoline");
});
