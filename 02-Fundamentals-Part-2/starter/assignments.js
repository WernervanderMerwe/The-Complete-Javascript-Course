'use strict';
// functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}
const descZA = describeCountry('South africa', 58, 'Johannesburg');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

// console.log(`${descZA}

// ${descGermany}

// ${descFinland}`);

// function declarations vs expressions
function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so its about ${(population / 7900) * 100}% of the world population.`
}

const za = percentageOfWorld1('South Africa', 58);
const Ger = percentageOfWorld1('Germany', 83);
const China = percentageOfWorld1('China', 1441);

// console.log(`${za}

// ${Ger}

// ${China}`);

const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so its about ${(population / 7900) * 100}% of the world population.`
}

const za1 = percentageOfWorld2('South Africa', 58);
const Ger1 = percentageOfWorld2('Germany', 83);
const China1 = percentageOfWorld2('China', 1441);

// console.log(`${za1}

// ${Ger1}

// ${China1}`);

// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const za2 = percentageOfWorld3(58);
const Ger2 = percentageOfWorld3(83);
const China2 = percentageOfWorld3(1441);

console.log(`${za2}
${Ger2}
${China2}`);

// Functions calling other functions
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld3(population);
    const description = `${country} has ${population} million people which is about ${percentage}% of the world.`
    console.log(description);
}

describePopulation('South Africa', 58)
describePopulation('Germany', 83)
describePopulation('China', 1441)

// Intro to Arrays
const populations1 = [58, 83, 1441, 6]
console.log(populations1.length === 4)

const percentages = [percentageOfWorld3(populations1[0]), percentageOfWorld3(populations1[1]), percentageOfWorld3(populations1[2]), percentageOfWorld3(populations1[populations1.length - 1])]

console.log(percentages)

// Basic array operations (methods)
const neighbours = ['Lesotho', 'Zimbabwe', 'Namibia'];
neighbours.push('Utopia');
console.log(neighbours)
neighbours.pop();
console.log(neighbours)

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a European country`)
}

neighbours[neighbours.indexOf('Namibia')] = 'Republic of Namibia'

console.log(neighbours)
// Introduction to Objects
const myCountry = {
    country: 'South Africa',
    capital: 'Johannesburg',
    language: 'English',
    population: 58,
    neighbours: ['Lesotho', 'Zimbabwe', 'Namibia'],
    // Dot vs Bracket Notation
    // Object Methods
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring courntries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        // even simpler
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};

console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring courntries and a capital called ${myCountry.capital}.`);
// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry['population'] - 2;

// console.log(myCountry);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry)
// Iteration: The for Loop
for (let vote = 1; vote <= 10; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}
// Looping Arrays, Breaking and Continuing
const populations = [58, 83, 1441, 6];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld3(populations[i]));
}

console.log(percentages2);
// Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    // console.log(`neigbouring country ${listOfNeighbours[i][i]}`);
    // console.log(`neigbouring country ${listOfNeighbours[i][i + 1]}`);
    for (let y = 0; y < listOfNeighbours[y].length; y++)
        console.log(`Neigbour: ${listOfNeighbours[i][y]}`);
}
// the While loop
// const populations = [58, 83, 1441, 6];
const percentages3 = [];

let i = 0
while (i < populations.length) {
    percentages3.push(percentageOfWorld3(populations[i]));
    i++;
}

console.log(percentages3);