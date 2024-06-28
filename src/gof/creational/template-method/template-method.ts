enum EParkingType {
  "public",
  "private",
}

abstract class ParkingFare {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const hours =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
    return hours * this.getFare();
  }

  abstract getFare(): number;
}

class PrivateParkingFareCalculate extends ParkingFare {
  getFare(): number {
    return 12;
  }
}

class PublicParkingFareCalculate extends ParkingFare {
  getFare(): number {
    return 0;
  }
}

class ParkingFareFactory {
  static create(type: EParkingType): ParkingFare {
    const parkingFare: any = {
      [EParkingType.public]: new PublicParkingFareCalculate(),
      [EParkingType.private]: new PrivateParkingFareCalculate(),
    };

    return parkingFare[type];
  }
}

const parking_public = ParkingFareFactory.create(EParkingType.public);
const parking_private = ParkingFareFactory.create(EParkingType.private);

const checkin: Date = new Date("2024-06-19T10:00:00");
const checkout: Date = new Date();

console.log(
  "Valor estadia no estacionamento publico: ",
  parking_public.calculate(checkin, checkout)
);
console.log(
  "Valor estadia no estacionamento privado: ",
  parking_private.calculate(checkin, checkout)
);
