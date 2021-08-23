import { render, screen } from '@testing-library/react';
import App from './App';
import './utils.js'
import { getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys, getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren, howMuchPencil, wordsToCharList } from './utils.js';

// test('test 1', () => {

//   const expected = ['age', 'name', 'isDog', 'friends'];
//   const input = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
//   const output = sortedKeys(input);
  
//   expect(expected).toEqual(output);
// });

// test('test 2', () => {

//   const expected = ['age'];
//   const input = { name: 'Angelina Jolie', isSpot: false, age: 80, };
//   const output = getFilteredKey(input);
  
//   expect(expected).toEqual(output);
// });

// test('test 3', () => {

//   const expected = [['name', 'Angelina Jolie'], ['age', 80]];
//   const input = { name: 'Angelina Jolie', age: 80 };
//   const output = getArrayOfKeysAndValues(input);
  
//   expect(expected).toEqual(output);
// });

// test('test 4', () => {

//   const expected = [['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']];
//   const input = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
//   const output = sortedArraysByValuesLength(input);
  
//   expect(expected).toEqual(output);
// });

test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']); //assert
});

test('test updaetnumbers', () => {

  const expected = ['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'];
  const input = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'};
  const output = updateNumbers(input);
  
  expect(expected).toEqual(output);
});

test('count numer of characters', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = totalCharacters(characters); //act
  expect(output).toEqual(26); //assert
});

test('bool has children ', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const outputA = hasChildrenEntries(characters, 'Eddard'); //act
  const outputB = hasChildrenEntries(characters, 'Euron'); //act
  expect(outputA).toEqual(true); //assert
  expect(outputB).toEqual(false); //assert
});

test('sort by child ', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = sortByChildren(characters, 'Eddard'); //act
  const expected = [ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]
  expect(output).toEqual(expected); //assert
  
});


test('test howmuchpencil', () => {

  const expected = ["Welcome", "elcome", "lcome", "come", "ome", "me", "e", ""];
  const input = 'Welcome';
  const output = howMuchPencil(input);
  
  expect(output).toEqual(expected);
});

test('test wordstoCahrlist', () => {

  const expected = ['G', 'r', 'e', 'g', 'o', 'r'];
  const input = 'Gregor';
  const output = wordsToCharList(input);
  
  expect(output).toEqual(expected);
});
test('test wordstoCahrlist size', () => {

  const expected = 6;
  const input = 'Gregor';
  const output = wordsToCharList(input);
  
  expect(output.length).toEqual(expected);
});
test('test wordstoCahrlist hooray', () => {

  const expected = ['h', 'o', 'o', 'r', 'a', 'y'];
  const input = 'hooray';
  const output = wordsToCharList(input);
  
  expect(output).toEqual(expected);
});
test('test wordstoCahrlist empty string', () => {

  const expected = [];
  const input = '';
  const output = wordsToCharList(input);
  
  expect(output).toEqual(expected);
});
