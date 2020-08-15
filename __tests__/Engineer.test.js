const Engineer = require('../lib/Engineer');


test('creates an app for engineers', () => {
    const engineer = new Engineer('Kristin');
  
    expect(engineer.name).toBe('Kristin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Kearnest10@gmail.com');
  });


  test('gets information from employee or returns false', () => {
    const engineer = new Employee('Kristin');
  
    expect(engineer.getInformation()).toEqual(expect.any(Array));
  
    employee.information = [];
  
    expect(engineer.getInformation()).toEqual(false);
  });
  
test("gets engineer's id value", () => {
  const engineer = new Engineer ('Kristin');

  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});