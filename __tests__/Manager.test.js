const Manager = require('../lib/Manager');



test('creates an app for managers', () => {
    const manager = new Manager('Kristin');
  
    expect(manager.name).toBe('Kristin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Kearnest10@gmail.com');
  });


  test('gets information from manager or returns false', () => {
    const manager = new Manager('Kristin');
  
    expect(manager.getInformation()).toEqual(expect.any(Array));
  
    manager.information = [];
  
    expect(manager.getInformation()).toEqual(false);
  });
  
test("gets manager's id value", () => {
  const manager = new Manager ('Kristin');

  expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});