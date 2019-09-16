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

function jediName(firstName, lastName) {
  let first = firstName.slice(0, 2);
  let last = lastName.slice(0, 3);
  return `${last}${first}`;
}

console.log(jediName('balay', 'aydemir'));
