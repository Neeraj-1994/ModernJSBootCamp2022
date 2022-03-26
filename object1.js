/*
// Objects - The Core of JavaScript

// Intro to Objects

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 11.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};
*/

/*
// Creating Object Literals

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

console.log(fitBitData);

console.log(fitBitData.totalMiles);

console.log(fitBitData.avgCalorieBurn);

console.log(fitBitData.workoutsThisWeek);
*/

/*
// Accessing Object Properties

const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!'
};

console.log(numbers[100]);

console.log(numbers['100']); // When property names are not valid JS identifiers

console.log(numbers['76 trombones']);

const palette = {
    red: '#eb4d4d',
    yellow: '#f9ca24',
    blue: '#30336b'
}

console.log(palette.red);

console.log(palette['blue']);

let mysteryColor = 'yellow';

console.log(palette[mysteryColor]); // Dynamic value to access data from an object
*/

// Adding and Updating Properties

const userReviews = {};

userReviews['queenBee49'] = 4.0;

console.log(userReviews);

userReviews.mrSmith78 = 3.5;

console.log(userReviews);

userReviews.queenBee49 = 5;

console.log(userReviews);

userReviews.queenBee49 += 2;

console.log(userReviews);

userReviews.mrSmith78++;

console.log(userReviews);