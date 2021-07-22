'use strict';
/*
function calcAge(birthYear) {
  const age = 2047 - birthYear;

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      //   Reassigning outer scope's variable
      output = 'New output!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl9(2, 3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl9(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//  example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
f();

var firstName = 'Mathilda';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    
    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };
      
      // Solution 2
      // Arrow function inherits the this keyword of its parent scope
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
    greet: () => {
      console.log(this);
      console.log(`hey ${this.firstName}`);
    },
  };
  jonas.greet();
  jonas.calcAge();
  
  // Arguments keyword
  const addExpr = function (a, b) {
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);
  
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  addArrow(2, 5, 8);
  
  let age = 30;
  let oldAge = age;
  age = 31;
  console.log(age);
  console.log(oldAge);
  
  const me = {
    name: 'jonas',
    age: 30,
  };
  const friend = me;
  friend.age = 27;
  console.log('friend:', friend);
  console.log('me', me);
  */

// Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {} // will work with let

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
