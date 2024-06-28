export enum EParkingType {
  "public",
  "private",
}

export default interface ParkingFare {
  calculate(checkinDate: Date, checkoutDate: Date): number;
}

export class PrivateParkingFareCalculate implements ParkingFare {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const hours =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
    return hours * 12;
  }
}

export class PublicParkingFareCalculate implements ParkingFare {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    return 0;
  }
}

export class ParkingFareFactory {
  static create(type: EParkingType): ParkingFare {
    const parkingFare: any = {
      [EParkingType.public]: new PublicParkingFareCalculate(),
      [EParkingType.private]: new PrivateParkingFareCalculate(),
    };

    return parkingFare[type];
  }
}
