import { render, screen } from '@testing-library/react';
import App from './App';
import './utils.js'
import { getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys, getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren, howMuchPencil,
   wordsToCharList, returnTen, findMax, totalSum, salesData, grandTotal } from './utils.js';

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

// test('it gets the names of the houses', () => {
//   const characters = [
//     {
//       name: 'Eddard',
//       spouse: 'Catelyn',
//       children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//       house: 'Stark'
//     },
//     {
//       name: 'Jon A.',
//       spouse: 'Lysa',
//       children: ['Robin'],
//       house: 'Arryn'
//     },
//     {
//       name: 'Cersei',
//       spouse: 'Robert',
//       children: ['Joffrey', 'Myrcella', 'Tommen'],
//       house: 'Lannister'
//     },
//     {
//       name: 'Daenarys',
//       spouse: 'Khal Drogo',
//       children: ['Drogon', 'Rhaegal', 'Viserion'],
//       house: 'Targaryen'
//     },
//     {
//       name: 'Mace',
//       spouse: 'Alerie',
//       children: ['Margaery', 'Loras'],
//       house: 'Tyrell'
//     },
//     {
//       name: 'Euron',
//       spouse: null,
//       children: [],
//       house: 'Greyjoy'
//     },
//     {
//       name: 'Jon S.',
//       spouse: null,
//       children: [],
//       house: 'Snow'
//     }
//   ]; //arrange
//   const output = getHouses(characters); //act
//   expect(output).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']); //assert
// });

// test('test updaetnumbers', () => {

//   const expected = ['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'];
//   const input = {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'};
//   const output = updateNumbers(input);
  
//   expect(expected).toEqual(output);
// });

// test('count numer of characters', () => {
//   const characters = [
//     {
//       name: 'Eddard',
//       spouse: 'Catelyn',
//       children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//       house: 'Stark'
//     },
//     {
//       name: 'Jon A.',
//       spouse: 'Lysa',
//       children: ['Robin'],
//       house: 'Arryn'
//     },
//     {
//       name: 'Cersei',
//       spouse: 'Robert',
//       children: ['Joffrey', 'Myrcella', 'Tommen'],
//       house: 'Lannister'
//     },
//     {
//       name: 'Daenarys',
//       spouse: 'Khal Drogo',
//       children: ['Drogon', 'Rhaegal', 'Viserion'],
//       house: 'Targaryen'
//     },
//     {
//       name: 'Mace',
//       spouse: 'Alerie',
//       children: ['Margaery', 'Loras'],
//       house: 'Tyrell'
//     },
//     {
//       name: 'Euron',
//       spouse: null,
//       children: [],
//       house: 'Greyjoy'
//     },
//     {
//       name: 'Jon S.',
//       spouse: null,
//       children: [],
//       house: 'Snow'
//     }
//   ]; //arrange
//   const output = totalCharacters(characters); //act
//   expect(output).toEqual(26); //assert
// });

// test('bool has children ', () => {
//   const characters = [
//     {
//       name: 'Eddard',
//       spouse: 'Catelyn',
//       children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//       house: 'Stark'
//     },
//     {
//       name: 'Jon A.',
//       spouse: 'Lysa',
//       children: ['Robin'],
//       house: 'Arryn'
//     },
//     {
//       name: 'Cersei',
//       spouse: 'Robert',
//       children: ['Joffrey', 'Myrcella', 'Tommen'],
//       house: 'Lannister'
//     },
//     {
//       name: 'Daenarys',
//       spouse: 'Khal Drogo',
//       children: ['Drogon', 'Rhaegal', 'Viserion'],
//       house: 'Targaryen'
//     },
//     {
//       name: 'Mace',
//       spouse: 'Alerie',
//       children: ['Margaery', 'Loras'],
//       house: 'Tyrell'
//     },
//     {
//       name: 'Euron',
//       spouse: null,
//       children: [],
//       house: 'Greyjoy'
//     },
//     {
//       name: 'Jon S.',
//       spouse: null,
//       children: [],
//       house: 'Snow'
//     }
//   ]; //arrange
//   const outputA = hasChildrenEntries(characters, 'Eddard'); //act
//   const outputB = hasChildrenEntries(characters, 'Euron'); //act
//   expect(outputA).toEqual(true); //assert
//   expect(outputB).toEqual(false); //assert
// });

// test('sort by child ', () => {
//   const characters = [
//     {
//       name: 'Eddard',
//       spouse: 'Catelyn',
//       children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
//       house: 'Stark'
//     },
//     {
//       name: 'Jon A.',
//       spouse: 'Lysa',
//       children: ['Robin'],
//       house: 'Arryn'
//     },
//     {
//       name: 'Cersei',
//       spouse: 'Robert',
//       children: ['Joffrey', 'Myrcella', 'Tommen'],
//       house: 'Lannister'
//     },
//     {
//       name: 'Daenarys',
//       spouse: 'Khal Drogo',
//       children: ['Drogon', 'Rhaegal', 'Viserion'],
//       house: 'Targaryen'
//     },
//     {
//       name: 'Mace',
//       spouse: 'Alerie',
//       children: ['Margaery', 'Loras'],
//       house: 'Tyrell'
//     },
//     {
//       name: 'Euron',
//       spouse: null,
//       children: [],
//       house: 'Greyjoy'
//     },
//     {
//       name: 'Jon S.',
//       spouse: null,
//       children: [],
//       house: 'Snow'
//     }
//   ]; //arrange
//   const output = sortByChildren(characters, 'Eddard'); //act
//   const expected = [ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]
//   expect(output).toEqual(expected); //assert
  
// });


// test('test howmuchpencil', () => {

//   const expected = ["Welcome", "elcome", "lcome", "come", "ome", "me", "e", ""];
//   const input = 'Welcome';
//   const output = howMuchPencil(input);
  
//   expect(output).toEqual(expected);
// });

// test('test wordstoCahrlist', () => {

//   const expected = ['G', 'r', 'e', 'g', 'o', 'r'];
//   const input = 'Gregor';
//   const output = wordsToCharList(input);
  
//   expect(output).toEqual(expected);
// });
// test('test wordstoCahrlist size', () => {

//   const expected = 6;
//   const input = 'Gregor';
//   const output = wordsToCharList(input);
  
//   expect(output.length).toEqual(expected);
// });
// test('test wordstoCahrlist hooray', () => {

//   const expected = ['h', 'o', 'o', 'r', 'a', 'y'];
//   const input = 'hooray';
//   const output = wordsToCharList(input);
  
//   expect(output).toEqual(expected);
// });
// test('test wordstoCahrlist empty string', () => {

//   const expected = [];
//   const input = '';
//   const output = wordsToCharList(input);
  
//   expect(output).toEqual(expected);
// });


test('test wordstoCahrlist empty string', () => {

  expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
});



test('test get MAX', () => {
const input = [[13,24,24,2], [2,5,6], [2,3]];
const exp = 24;
const output = findMax(input);

  expect(output).toStrictEqual(exp);
});


test('test totalSum', () => {
  const input = [[13,24,24,2], [2,5,6], [2,3]];
  const exp = 81;
  const output = totalSum(input);
  
    expect(output).toStrictEqual(exp);
  });


  test('salesData function', () => {


const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

    expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 p.m.' },
      { sales: '139 cookies', time: '1 p.m.' },
      { sales: '161 cookies', time: '2 p.m.' },
      { sales: '145 cookies', time: '3 p.m.' },
      { sales: '232 cookies', time: '4 p.m.' },
      { sales: '276 cookies', time: '5 p.m.' },
      { sales: '207 cookies', time: '6 p.m.' },
      { sales: '161 cookies', time: '7 p.m.' },
      { sales: '169 cookies', time: '8 p.m.' }
    ]);
    
    expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
  });