import { Car } from "./car";
import { CarFlyweight } from "./car-flyweight";

test("Devo criar dois veiculos do tipo popular", () => {
  const flyweight = new CarFlyweight();

  const car_1 = new Car("popular", "black");
  const car_2 = new Car("popular", "pink");
  const car_3 = new Car("popular", "red");
  const car_4 = new Car("offroad", "yellow");
  const car_5 = new Car("sport", "blue");

  car_1.setCharacteristics(flyweight.make(car_1));
  car_2.setCharacteristics(flyweight.make(car_2));
  car_3.setCharacteristics(flyweight.make(car_3));
  car_4.setCharacteristics(flyweight.make(car_4));
  car_5.setCharacteristics(flyweight.make(car_5));

  expect(car_1.getCharacteristics()?.fuelType).toBe("gasoline");
  expect(car_2.getCharacteristics()?.fuelType).toBe("gasoline");
  expect(car_3.getCharacteristics()?.fuelType).toBe("gasoline");
  expect(car_4.getCharacteristics()?.fuelType).toBe("diesel");
  expect(car_5.getCharacteristics()?.fuelType).toBe("gasoline");
});
