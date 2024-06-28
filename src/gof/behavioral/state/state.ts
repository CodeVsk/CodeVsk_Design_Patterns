interface TaskStatus {
  value: string;

  inprogress(): void;
  done(): void;
}

class ToDoStatus implements TaskStatus {
  value: string;

  constructor(readonly task: Task) {
    this.value = "to_do";
  }

  inprogress(): void {
    this.task.status = new InProgressStatus(this.task);
  }

  done(): void {
    throw new Error("Method not implemented.");
  }
}

class InProgressStatus implements TaskStatus {
  value: string;

  constructor(readonly task: Task) {
    this.value = "in_progress";
  }

  inprogress(): void {
    throw new Error("Method not implemented.");
  }

  done(): void {
    this.task.status = new DoneStatus(this.task);
  }
}

class DoneStatus implements TaskStatus {
  value: string;

  constructor(readonly task: Task) {
    this.value = "done";
  }

  inprogress(): void {
    throw new Error("Method not implemented.");
  }

  done(): void {
    throw new Error("Method not implemented.");
  }
}

export default class Task {
  status: TaskStatus;

  constructor(readonly title: string, readonly description: string) {
    this.status = new ToDoStatus(this);
  }

  inprogress(): void {
    this.status.inprogress();
  }

  done(): void {
    this.status.done();
  }
}
