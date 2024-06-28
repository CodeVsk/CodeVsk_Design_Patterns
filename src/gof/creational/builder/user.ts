import UserBuilder from "./user-builder";

export default class User {
  firstName: string;
  lastName: string;

  phone: string;
  email: string;

  address: string;
  city: string;
  state: string;

  constructor(builder: UserBuilder) {
    this.firstName = builder.firstName;
    this.lastName = builder.lastName;
    this.phone = builder.phone;
    this.email = builder.email;
    this.address = builder.address;
    this.city = builder.city;
    this.state = builder.state;
  }
}
