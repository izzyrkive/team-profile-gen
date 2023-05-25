const { expect } = require('@jest/globals');
const Employee = require('../lib/Engineer');

test('should create object', () => {
const employee = new Employee();
expect(typeof employee).toBe("object");
});


test("should get engineer's name", () => {
const employee = new Employee('Engineer');
expect(employee.getName()).toBe('Engineer');
});

test("should get engineer's id", () => {
const employee = new Employee('Izzy Perez', '1');
expect(employee.getId()).toBe('2');
});

test("should get engineer's email", () => {
const employee = new Employee('Izzy Perez', '2', 'ixp347@med.miami.edu');
expect(employee.getEmail()).toBe('ixp347@med.miami.edu');
});

test("should get engineer's Github", () => {
const employee = new Employee('https://github.com/izzyrkive');
expect(employee.getGithub()).toBe('https://github.com/izzyrkive');
});

test("should return 'Engineer' for getRole()", () => {
const employee = new Employee('Engineer');

expect(employee.getRole()).toBe('Engineer');
});
