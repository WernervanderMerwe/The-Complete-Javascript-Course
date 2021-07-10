
// values and Variables
const country = 'South Africa';
const continent = 'Africa';
let population = 58;

console.log(country);
console.log(continent);
console.log(population);
// data types
const isIsland = false;
let language;

if (isIsland === false);
console.log(typeof isIsland)
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
// let const and var
language = "English";
console.log(language);
console.log(typeof language);

let populationHalf = population / 2;
console.log(populationHalf);
populationHalf++;
console.log(populationHalf);

const popFinland = 6; //million

console.log(population > popFinland);

const aveCountryPop = 33; //million
console.log(population < aveCountryPop);

let description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language +
    '.';
console.log(description);

// Strings and Template Literals
description = `${country} is in ${continent}, and its${population} million people speak ${language}.`;
console.log(description)

// Taking Decisions: if/else statements
if (population > 33) {
    console.log(`South Africa's population is above average.`);
} else {
    console.log(`South Africa's population is ${33 - population} million below average`);
}

// Type Conversion & Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//  Equality Operators: == vs. ===
// const numNeighbours = Number(prompt(`How many neighbouring countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else if (numNeighbours !== Number) {
//     console.log(`Please type a number`);
// } else {
//     console.log(`No borders`);
// }
// Logical operators
if (language === 'English' && population < 50 && isIsland === false) {
    console.log(`You should live in South Africa.`)
} else {
    console.log(`South Africa does not meet your criteria`)
}
// The Switch statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
    case 'English':
        console.log(`3rd place`);
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`)
}
// The Conditional (ternary) Operator
const aboveOrBelow = population > 33 ? `above` : `below`;

console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`)