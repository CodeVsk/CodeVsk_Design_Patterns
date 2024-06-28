import Task from "./state";

test("Devo atualizar a task para done", () => {
  const task = new Task("Go horse task", "Go Horse Level 999");

  task.inprogress();

  task.done();

  expect(task.status.value).toBe("done");
});
