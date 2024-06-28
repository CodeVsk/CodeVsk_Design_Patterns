export default class UserBuilder {
  firstName!: string;
  lastName!: string;

  phone!: string;
  email!: string;

  address!: string;
  city!: string;
  state!: string;

  setName(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this;
  }

  setContact(phone: string, email: string) {
    this.phone = phone;
    this.email = email;
    return this;
  }

  setAddress(address: string, city: string, state: string) {
    this.address = address;
    this.city = city;
    this.state = state;
    return this;
  }
}
