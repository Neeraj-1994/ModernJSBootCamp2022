/*
// Capture Collections of Data with Arrays

// Creating Arrays

let shoppingList = ['cheese', 'cereal', 'ice'];

let lottoNumbers = [45, 12, 23, 25, 34];

let myCollection = ['dog', 12, NaN, true, null]; // Creating Array with Array Literals

let collections = new Array(1, 2, 3, 5, 6, 8);
*/

/*
// Array Indices

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.length);

console.log(colors[0]);

console.log(colors[4]);

console.log(colors[colors.length - 1]);

console.log(colors[213]);
*/

/*
// Modifying Arrays

let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1] = 'Whole Milk';

console.log(shoppingList);

shoppingList[2] = 'Ice Cream';

console.log(shoppingList);

shoppingList[shoppingList.length] = 'Tomatoes';

console.log(shoppingList);

shoppingList[shoppingList.length] = 'Potatoes';

console.log(shoppingList);

shoppingList[0] = 'Bread';

console.log(shoppingList);
*/

/*
// Push and Pop

// array.push(arg) - Adds one or more elements to the end of an array,
// and returns the new length of the array.

let topSongs = ['Party Rock Anthem', 'Bang Bang', 'Payphone', 'Girls Like You'];

console.log(topSongs);

topSongs.push('Baby');

console.log(topSongs);

topSongs.push('Mood');

console.log(topSongs);

// array.pop() - Removes the last element from an array and returns that element.

topSongs.pop();

console.log(topSongs);

const nextSong = topSongs.pop();

console.log(nextSong);

console.log(topSongs);
*/

/*
// Shift and Unshift

// array.unshift(arg) - Adds one or more elements to the front of an array,
// and returns the new length of the array.

let dishesToDo = ['big platter'];

console.log(dishesToDo);

dishesToDo.unshift('large plate');

console.log(dishesToDo);

dishesToDo.unshift('small plate');

console.log(dishesToDo);

dishesToDo.unshift('cereal bowl');

console.log(dishesToDo);

dishesToDo.unshift('mug');

console.log(dishesToDo);

dishesToDo.unshift('dirty spoon');

console.log(dishesToDo);

// array.shift() - Removes the first element from an array and returns that element.

dishesToDo.shift();

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

// Adding multiple items

dishesToDo.unshift('fork', 'knife');

console.log(dishesToDo);

dishesToDo.unshift('small spoon', 'large spoon');

console.log(dishesToDo);
*/

/*
// Concat

// array1.concat(array2) - Returns a new array that is the calling array
// joined with other array(s) and/or value(s).

let fruits = ['apple', 'banana'];

let veggies = ['asparagus', 'brussel sprouts'];

let meats = ['steak', 'chicken breasts'];

let allFoods = fruits.concat(veggies, meats);

console.log(allFoods);

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
*/

/*
// Includes and IndexOf

// array.includes(arg) - Determines whether the calling array contains a value,
// returning true or false as appropriate.

let ingredients = [
  'water', 'corn starch', 'flour', 'cheese',
    'brown sugar', 'shrimp', 'eel', 'butter'
];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn'));
console.log(ingredients.includes('flour', 1));

if (ingredients.includes('flour')) {
    console.log('I am gluten free. I can not eat that');
}

// array.indexOf(arg) - Returns the first (least) index at which a given element
// can be found in the calling array.

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('cheese', 5));
console.log(ingredients.indexOf('cheese', 2));
*/

/*
// Reverse and Join

// array.reverse() - Reverses the order of the elements of an array in place.
// (First becomes the last, last becomes first.)

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

console.log(letters.reverse());

// array.join() - Joins all elements of an array into a string.

console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.reverse().join('.'));
console.log(letters.join('-'));
console.log(letters.join(''));
*/

/*
// Slice

// array.slice(arg) - Extracts a section of the calling array and returns a new array.

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

console.log(animals);

let swimmers = animals.slice(0, 3);

console.log(swimmers);

let mammals = animals.slice(2, 4);

console.log(mammals);

let reptiles = animals.slice(4);

console.log(reptiles);

let quadrupeds = animals.slice(-3);

console.log(quadrupeds);

console.log(animals.slice(-3, -1));
*/

// Splice

// array.splice(args) - Adds and/or removes elements from an array.

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

console.log(animals.splice(1, 0, 'octopus'));
console.log(animals);

console.log(animals.splice(3, 2));
console.log(animals);

console.log(animals.splice(3, 0, 'snake', 'frog'));
console.log(animals);

console.log(animals.splice(0, 2, 'SHARK!', 'OCTOPUS!'));
console.log(animals);
