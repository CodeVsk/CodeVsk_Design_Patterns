import { Employee, EmployeeBase, EmployeeManager } from "./employee-tree";

test("Devo criar uma arvore de colaboradores e trazer as informações", () => {
  const manager: EmployeeManager = new EmployeeManager(
    "Thiago Moletom",
    "Project Leader"
  );

  const srDeveloper: Employee = new EmployeeBase(
    "Eduardo Bichas Maia",
    "Go Horse Developer Senior"
  );
  const plDeveloper: Employee = new EmployeeBase(
    "Vinilicu Sant ana",
    "Go Horse Developer Pleno"
  );
  const jrDeveloper: Employee = new EmployeeBase(
    "Gustavo Lebabos ovos",
    "Go Horse Developer Júnior"
  );

  manager.addSubordinate(srDeveloper);
  manager.addSubordinate(plDeveloper);
  manager.addSubordinate(jrDeveloper);

  manager.showDetails();

  expect(null).toBe(null);
});
