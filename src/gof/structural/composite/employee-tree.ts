export interface Employee {
  getEmployeeId(): string;
  showDetails(): void;
}

export class EmployeeBase implements Employee {
  private employeeId: string;
  constructor(readonly name: string, readonly position: string) {
    this.employeeId = crypto.randomUUID();
  }

  getEmployeeId(): string {
    return this.employeeId;
  }

  showDetails(): void {
    console.log(`Name: ${this.name} | Position: ${this.position}`);
  }
}

export class EmployeeManager implements Employee {
  private subordinates: Employee[];
  private employeeId: string;

  constructor(readonly name: string, readonly position: string) {
    this.employeeId = crypto.randomUUID();

    this.subordinates = [];
  }
  getEmployeeId(): string {
    return this.employeeId;
  }
  showDetails(): void {
    console.log(`Name: ${this.name} | Position: ${this.position}`);
    for (const employee of this.subordinates) {
      employee.showDetails();
    }
  }

  addSubordinate(employee: Employee): void {
    this.subordinates.push(employee);
  }

  removeSubordinate(employee: Employee): void {
    const index: number = this.subordinates.findIndex(
      (subordinate) => subordinate.getEmployeeId() === employee.getEmployeeId()
    );

    this.subordinates.splice(index, 1);
  }
}
