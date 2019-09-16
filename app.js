'use strict';

/*function getYearOfBirth (age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error ('Arguments not valid');
  }
  if (age < 0 ){
    throw new Error ('Age can not be negative');
  } 

  if (typeof name !== 'string' || typeof age !== 'number'){
    throw new TypeError('Invalid Entry');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}


try {
  const greeting1 = createGreeting(27, 27);
  console.log(greeting1);
} catch(err) {
  console.log(err);
}*/

/*function jediName(firstName, lastName) {
  let first = firstName.slice(0, 2);
  let last = lastName.slice(0, 3);
  return `${last}${first}`;
}

console.log(jediName('balay', 'aydemir'));*/

/*function beyond(num) {
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    return 'And beyond';
  }
  if (num > 0) {
    return 'To infinity';
  }
  if (num < 0) {
    return 'To negative infinity';
  }
  if (num === 0) {
    return 'Staying home';
  }
}

console.log(beyond(Number.POSITIVE_INFINITY));

function decode(word) {
  if (word.charAt(0) > 'd') {
    return ' ';
  }
  if (word.charAt(0) === 'a') {
    return word.charAt(1);
  }
  if (word.charAt(0) === 'b') {
    return word.charAt(2);
  }
  if (word.charAt(0) === 'c') {
    return word.charAt(3);
  }
  if (word.charAt(0) === 'd') {
    return word.charAt(4);
  }
}

let str = 'craft block argon meter bells brown croon droop';
let arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
  console.log(decode(arr[i]));
}
*/

function daysInMonth(month, leapYear) {
  switch (month) {
    case 'February':
      if (leapYear) return 29;
      return 28;
    case 'April':
      return 30;
    case 'June':
      return 30;
    case 'September':
      return 30;
    case 'November':
      return 30;
    default:
      return 31;
  }
}

function rps(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log('Computer threw ' + randomNo);

  if (num > 3 || num <= 0) {
    throw new Error('Entry is not a number between 1 and 3');
  }
  if (num === 1) {
    if (randomNo === 1) return 'Tie';
    if (randomNo !== 2) return 'Winner!';
  }
  if (num === 2) {
    if (randomNo === 2) return 'Tie';
    if (randomNo !== 3) return 'Winner!';
  }
  if (num === 3) {
    if (randomNo === 3) return 'Tie';
    if (randomNo !== 1) return 'Winner!';
  }

  return 'Loser';
}

console.log(rps(1));
console.log(rps(2));
console.log(rps(3));
