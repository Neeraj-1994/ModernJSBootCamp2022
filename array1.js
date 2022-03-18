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

// Push and Pop

// array.push(args) - Adds one or more elements to the end of an array,
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