const Employee = require('../lib/Employee');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
// const Manger = require('../lib/Manger');



test('creates an app for employees', () => {
    const employee = new Employee('Kristin');
  
    expect(employee.name).toBe('Kristin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Kearnest10@gmail.com');
  });


  test('gets information from employee or returns false', () => {
    const employee = new Employee('Kristin');
  
    expect(employee.getInformation()).toEqual(expect.any(Array));
  
    employee.information = [];
  
    expect(employee.getInformation()).toEqual(false);
  });
  
test("gets employee's id value", () => {
  const employee = new Employee ('Kristin');

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});
