'use strict';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log('New array, filtered (filter)', oddNumbers);

//

const students = [
  {name: 'Alice', grade: 85},
  {name: 'Bob', grade: 92},
  {name: 'Eve', grade: 78},
];

console.log(`Same array, changed (foreach)  Name:`);
students.forEach((student) => {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

//

const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(
  (celsius) => (celsius * 9) / 5 + 32
);
console.log('New array by modification (map) ', fahrenheitTemperatures);

//

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log('Array into value (reduce) ', sum);

const kala = 'kala';
const onkoKala = kala == 'kala' ? 'on' : 'ei';

//

const listanAlku = [1, 2, 3];
const listanLoppu = [4, 5, 6];
const kokoLista = [...listanAlku, ...listanLoppu];

console.log('Koko lista 1-6:', kokoLista);

//

const jokuArvo = null;
const toinenArvo = jokuArvo ?? 'Silti Jotain'; // Ignores falsy

console.log('Nullish coalescing: ', toinenArvo);

//

const jokuArvo2 = null;
const toinenArvo2 = jokuArvo || 'Silti vielä Jotain'; // Does falsy

console.log('logical OR: ', toinenArvo2);

//
