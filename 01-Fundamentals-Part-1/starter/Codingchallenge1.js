/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK
*/

// 1. Data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// 2.
let bmiMark = markMass / markHeight ** 2;
let bmiMark1 = markMass / (markHeight * markHeight);
// saw that parentheses is needed in order to work because / and * share precedence so it will be calculated from left to right.
let bmiJohn = johnMass / johnHeight ** 2;

console.log("Marks BMI =", bmiMark);
console.log("Test for same value", bmiMark1);
console.log("Johns BMI =", bmiJohn);

// 3.
let markHigherBMI = bmiMark > bmiJohn;
console.log("What type of data is markHigherBMI?", typeof markHigherBMI);
console.log("is Marks BMI higher?", markHigherBMI);

// Data 2, this is why I changed the 'const' to 'let'
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

bmiMark = markMass / markHeight ** 2;
bmiJohn = johnMass / johnHeight ** 2;
markHigherBMI = bmiMark > bmiJohn;

console.log("Marks BMI =", bmiMark);
console.log("Johns BMI =", bmiJohn);
console.log("is Marks BMI higher?", markHigherBMI);

// What it should have been according to the teacher:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// for data 2 He changed the code accordingly:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK �
*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

let bmiMark = markMass / markHeight ** 2;
let bmiMark1 = markMass / (markHeight * markHeight);
let bmiJohn = johnMass / johnHeight ** 2;

// 1.
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

// 2.
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
