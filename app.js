'use strict';

function getYearOfBirth (age) {
  if (age < 0 ){
    throw new Error ('Age can not be negative');
  } 
  return 2019 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error ('Arguments not valid');
  }
  if (typeof name !== 'string' || typeof age !== 'number'){
    throw new TypeError('invalid entry', 'app.js');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}.`;
}


try {
  const greeting1 = createGreeting('Shannon', 27);
  console.log(greeting1);
} catch(err) {
  console.log(err);
}
