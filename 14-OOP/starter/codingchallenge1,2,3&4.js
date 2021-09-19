'use strict';
/*
Coding Challenge #1

Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a'speed' property. The 'speed' property is the current speed of the car in km/h.

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.

4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

GOOD LUCK �
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${(this.speed += 10)}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();

merc.accelerate();
merc.brake();
merc.accelerate();
merc.brake();
merc.accelerate();
merc.brake();

/*
Coding Challenge #2

Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h

GOOD LUCK �
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} is going at ${(this.speed += 10)}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    // added return this for Challenge 4
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();

console.log(ford.speed, ford.speedUS);
ford.speedUS = 50;
console.log(ford);

/*
Coding Challenge #3

Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20,and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140km/h, with a charge of 22%'

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 
Hint: Review the definiton of polymorphism �

Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK �
*/

const CarProto = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },
  accelerate() {
    console.log(`${this.make} is going at ${(this.speed += 10)}km/h`);
  },

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  },

  get speedUS() {
    return this.speed / 1.6;
  },

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  },
};

// const tesla = Object.create(CarProto);
// tesla.init('Tesla', 120, 23);
// console.log(tesla);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Can not use an arrow function here!
// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(
    `${
      this.make
    } is going at ${(this.speed += 20)}km/h, with a charge of ${(this.charge -= 1)}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

console.log(tesla);
console.log(tesla.__proto__);
console.log(tesla.__proto__.__proto__);

console.log(tesla instanceof EV);
console.log(tesla instanceof Car);
console.log(tesla instanceof Object);

/*
Coding Challenge #4

Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class

2. Make the 'charge' property private

3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!

Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK �
*/

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    console.log(
      `${
        this.make
      } is going at ${(this.speed += 20)}km/h, with a charge of ${(this.#charge -= 1)}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  getCharge() {
    return this.#charge;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
rivian.accelerate().brake().chargeBattery(56);
// console.log(rivian.getCharge());
// rivian.brake();
// rivian.chargeBattery(56)
console.log(rivian.getCharge());
console.log(rivian);
