import User from "./user";
import UserBuilder from "./user-builder";

test("Criar um usuário utilizando builder", () => {
  const builder: UserBuilder = new UserBuilder()
    .setName("Zoro", "Rorona")
    .setContact("00-00000-0000", "zoro@mugiwaras.com")
    .setAddress("New World", "Egg Head", "One Piece");

  const user: User = new User(builder);

  expect(user.firstName).toBe("Zoro");
});
