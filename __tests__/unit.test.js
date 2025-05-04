// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('isPhoneNumber returns true for valid numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for invalid numbers', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('phone123')).toBe(false);
});

// isEmail
test('isEmail returns true for valid emails', () => {
  expect(isEmail('example@test.com')).toBe(true);
  expect(isEmail('hello123@domain.com')).toBe(true);
});

test('isEmail returns false for invalid emails', () => {
  expect(isEmail('example.com')).toBe(false);
  expect(isEmail('@test.com')).toBe(false);
});

// isStrongPassword
test('isStrongPassword returns true for strong passwords', () => {
  expect(isStrongPassword('Strong123')).toBe(true);
  expect(isStrongPassword('Valid_pass1')).toBe(true);
});

test('isStrongPassword returns false for weak passwords', () => {
  expect(isStrongPassword('123')).toBe(false);
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate returns true for valid dates', () => {
  expect(isDate('12/25/2020')).toBe(true);
  expect(isDate('1/1/1999')).toBe(true);
});

test('isDate returns false for invalid dates', () => {
  expect(isDate('2020-12-25')).toBe(false);
  expect(isDate('Jan 1, 2000')).toBe(false);
});

// isHexColor
test('isHexColor returns true for valid hex codes', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('#abcdef')).toBe(true);
});

test('isHexColor returns false for invalid hex codes', () => {
  expect(isHexColor('#12345g')).toBe(false); 
  expect(isHexColor('#GGG')).toBe(false);
});