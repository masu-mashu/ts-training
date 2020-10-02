import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const length = Number(inputs[0]);

if (Number.isNaN(length)) {
  throw Error('Not a Number');
}

Array.from({ length }, (_, i) => i).forEach((_, i) => {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
});
