const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('should create an Employee object', () => {
const employee = new Employee();

expect(typeof employee).toBe("object");
});

test("should get the employee's name", () => {
const employee = new Employee('Izzy Perez');

expect(employee.getName()).toBe('Izzy Perez');
});

test("should get the employee's id", () => {
const employee = new Employee('Izzy Perez', '1');

expect(employee.getId()).toBe('1');
});

test("should get the employee's email", () => {
const employee = new Employee('Izzy Perez', '1', 'ixp347@med.miami.edu');

expect(employee.getEmail()).toBe('ixp347@med.miami.edu');
});

test("should return 'Employee' for getRole()", () => {
const employee = new Employee('Employee');

expect(employee.getRole()).toBe('Employee');
});