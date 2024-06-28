import Mediator from "./mediator";
import Notify from "./notify";
import User from "./user";

test("Deve criar dois eventos de log e dispara-los através do mediator", () => {
  const mediator = new Mediator();

  const user_1 = new User("Bob");
  const user_2 = new User("Alice");

  const notification = new Notify(mediator);

  notification.addRecipients(user_1);
  notification.addRecipients(user_2);

  notification.send("Github", "Novo pull request pendente para análise");

  expect(user_1.name).toBe("Bob");
});
