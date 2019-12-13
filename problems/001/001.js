console.log('Project Euler - Problem 01');
console.log('https://projecteuler.net/problem=1');
console.log('----------------------------------');

const limit = 1000;
let result = 0;

for (let number = 1; number < limit; number += 1) {
  if (number % 3 === 0 || number % 5 === 0) {
    result += number;
  }
}

console.log('Sum of multiples:', result);
