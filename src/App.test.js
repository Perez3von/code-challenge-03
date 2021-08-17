import { render, screen } from '@testing-library/react';
import App from './App';
import './utils.js'
import { getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys } from './utils.js';

test('test 1', () => {

  const expected = ['age', 'name', 'isDog', 'friends'];
  const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const output = sortedKeys(input);
  
  expect(expected).toEqual(output);
});

test('test 2', () => {

  const expected = ['age'];
  const input = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const output = getFilteredKey(input);
  
  expect(expected).toEqual(output);
});

test('test 3', () => {

  const expected = [['name', 'Angelina Jolie'], ['age', 80]];
  const input = { name: 'Angelina Jolie', age: 80 };
  const output = getArrayOfKeysAndValues(input);
  
  expect(expected).toEqual(output);
});

test('test 4', () => {

  const expected = [['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']];
  const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
  const output = sortedArraysByValuesLength(input);
  
  expect(expected).toEqual(output);
});
