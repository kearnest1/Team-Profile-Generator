const Intern = require('../lib/Intern');




test('creates an app for interns', () => {
    const intern = new Intern('Kristin');
  
    expect(intern.name).toBe('Kristin');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Kearnest10@gmail.com');
  });


  test('gets information from intern or returns false', () => {
    const intern = new Intern('Kristin');
  
    expect(intern.getInformation()).toEqual(expect.any(Array));
  
    intern.information = [];
  
    expect(intern.getInformation()).toEqual(false);
  });
  
test("gets intern's id value", () => {
  const intern = new Intern ('Kristin');

  expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});