/*
// JS Values & Variables

// Introducing Numbers

// Addition
console.log(50 + 5);

// Subtraction
console.log(90 - 1);

// Multiplication
console.log(11111 * 7);

// Division
console.log(400 / 25);

// Modulo
console.log(27 % 2); // Gives the remainder

// Exponents
console.log(8 ** 3); // same as 8^3

// Order of Operations
console.log((4 - 7) * 3); // Follows PEMDAS
*/

/*
// NaN & Infinity

// Ways to arrive to NaN
console.log(0/0);
console.log(1 + NaN);

// Ways to arrive to Infinity & -Infinity
console.log(1/0);
console.log(-1/0);
*/

/*
// Variables & let

// Basic Syntax
let someName = 'value';
let age = 72;

// Recalling variables
let hens = 4;
let rooster = 2;
console.log(hens + rooster);

// Rules of naming variables
let numOfHens = 4;
let averageRating = 9.7;
*/

/*
// Unary Operators

let score = 0;

score = score + 10;

score += 1;

score += 10;

score -= 100;

score = 150;

bonusMult = 3;

score *= bonusMult;

let counter = 0;

// post-increment (returns the value then changes afterwards)
counter++;

// pre-increment (changes value and returns the changed value)
++counter;

// post-decrement (returns the value then changes afterwards)
counter--;

// pre-decrement (changes value and returns the changed value)
--counter;
*/

/*
// Introducing Const

const pi = 3.14159;

const daysInAWeek = 7;
*/

/*
// The Legacy of Var

var tripDistance = 7.4;
*/

/*--------------------------------------------------------------------------------------------------*/

/*
// How To Model Data Efficiently

// Booleans Intro

let isHungry = false;

const isWaterWet = true;
*/

/*
// Strings

let name = 'John';

let firstName = "Andrew";

let lasName = `Baldwin`;

let fullName = firstName + ' ' + lasName;  // Concatenation

let numberOperation = 'hi' + 1;

console.log(fullName);
*/

/*
// String Indices

let animal = 'chicken';

console.log(animal.length);

let mySong = "Surfin' USA";

console.log(mySong[0]);

console.log(mySong[11]);

let gibberish = "asdasdasdasnbcxnzvchjvehawdhjsbdsabcjhsd*(,., sajhdu";

console.log(gibberish[gibberish.length - 1]);
*/

/*
// String Methods (syntax: thing.method())

let msg = "you are so grounded mr";

console.log(msg.toUpperCase());

msg = msg.toUpperCase();

console.log(msg.toLowerCase());

let color = "    purple     ";

console.log(color.trim());

console.log(color.trim().toUpperCase());

console.log("asdd asdasd asdasd     ".trim());
*/

/*
// More String Methods (syntax: thing.method(args))

console.log("baseball".indexOf("ball"));

console.log("baseball".indexOf("b"));

console.log("Baseball".indexOf("b"));

console.log("Baseball".indexOf("entertaining"));

console.log("Baseball".slice(4));

let sport = "Baseball";

console.log(sport.slice(4), sport);

console.log("superhero".slice(0, 5));

console.log("superhero".slice(5, 7));

console.log("$50.60".slice(1));

console.log("baseball is entertaining".replace('entertaining', 'ok'));

console.log("ha ha ha".replace('ha', 'hee'));
*/

/*
// String Escape Characters

console.log("he said \"I ain\'t happy\"");

console.log('he said \"I ain\'t happy\"');

console.log("HELLO\nGOODBYE");

console.log("\thaaa");
*/

/*
// String Template Literals

console.log(`he said "lol"`);

console.log(`${1+5}`);

console.log(`You owe me ${100+123123}`);

let animal = 'pig';

let sound = 'oink';

console.log(`${animal} says ${sound}!`);

console.log(`${animal} says ${sound.toUpperCase()}!`);

const minAge = 21;

const yourAge = 19;

console.log(`You must be ${minAge} or older to enter. Come back in ${minAge-yourAge} years.`);
*/

/*
// Null & Undefined

let loggedInUser = null; // Intentionally empty

let color; // Nothing assigned

console.log(loggedInUser, color);
*/

/*
// Math Object & Random Numbers

console.log(Math.PI);

console.log(Math.floor(3.657));

console.log(Math.round(4.4));

console.log(Math.pow(7, 2));

console.log(Math.random());

console.log(Math.floor(Math.random()*6)+ 1); // Random die roll
*/

/*
// typeof Operator

console.log(typeof 99);

console.log(typeof true);

let mystery = "99 balloons";
console.log(typeof mystery);

console.log(typeof undefined);

console.log(typeof null);
*/

/*
// parseInt & parseFloat

console.log(parseInt("21"));
console.log(parseInt("21") + 1);
console.log(parseFloat("33.55434534"));
console.log(parseInt("123.1231231"));
console.log(parseInt('$99'));
console.log(parseFloat("99days Later"))
*/

/*--------------------------------------------------------------------------------------------------*/

/*
// Controlling Program Logic & Flow

// Comparison Operators

console.log(-2 > 1);

console.log(10 < 9999999);

console.log(2 >= 2);

console.log(2 >= 5);

console.log(55.1 <= 55.5);

console.log("hello".length >= "hello!".length);

console.log('a' < 'A');

console.log('B' < 'a'); // Unicode characters comparison
*/

/*
// Double Equals (==)

console.log(4 == 4);

console.log(false == false);

console.log(4 == '4');

console.log(0 == '');

console.log(0 == false);

console.log(null == undefined);
*/

/*
// Triple Equals (===)

console.log(2 === '2');

console.log(0 === false);

console.log(undefined === null);

console.log(3 === 3);

console.log(null === null);

let isLoggedIn = false;

console.log(isLoggedIn === false);

isLoggedIn = 0;
console.log(isLoggedIn === false);

console.log(1 != 2);

console.log(1 != '1');

console.log(1 !== '1');
*/

/*
// If Statements (Syntax: if(statement) { condition if true }

if (1 !== 1) {
    console.log("It's True!");
}
let rating = 3;

if (rating === 3) {
    console.log("YOU'RE A SUPERSTAR!");
}

let num = 37;

if (num % 2 !== 0) {
    console.log("ODD NUMBER");
}
*/

/*
// Else if

// Syntax: if (statement 1) {
//         condition if statement 1 is true
//         } else if (statement 2) {
//         condition if statement 2 is true
//         }

let rating = 1;

if (rating === 3) {
    console.log("YOU'RE A SUPERSTAR!");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
*/

/*
// Else

// Syntax: if (statement 1) {
//         condition if statement 1 is true
//         } else if (statement 2) {
//         condition if statement 2 is true
//         } else {
//         condition if all statements are false
//         }

let rating = 21;

if (rating === 3) {
    console.log("YOU'RE A SUPERSTAR!");
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
} else {
    console.log("INVALID RATING!");
}

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}
*/

/*
// Nesting Conditionals

let password = 'kitty';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    }
    else {
        console.log("Password is long enough, but cannot contain spaces");
    }
}
else {
    console.log("Password must be longer!")
}
*/

/*
// Truthy & Falsy Values

let mystery = 1;

if (mystery) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}

let loggedInUser = null;

if (loggedInUser) {
    console.log('YOU ARE LOGGED IN!');
}
else {
    console.log('PLEASE LOG IN!');
}
*/

/*
// Logical AND (&&)

console.log(1 <= 4 && 'a' === 'a');

console.log(9 > 10 && 9 >= 9);

console.log('abc'.length === 3 && 1+1 === 4);

let password = 'chickenGal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log('VALID PASSWORD!');
} else {
    console.log('INVALID PASSWORD!');
}

let num = 3;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10');
} else {
    console.log('Please guess a number between 1 and 10');
}
*/

/*
// Logical OR (||)

console.log(1 !== 1 || 10 === 10);

console.log(0 || undefined);

console.log(10/2 === 5 || 1 === 1);

let age = 78;

if (age < 6 || age >= 65) {
    console.log('You get in for free!');
} else {
    console.log('You must pay!');
}

let color = 'violet';

if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('Great choice!');
}
*/

// Logical NOT (!)

console.log(!null);

console.log(!(0 === 0));

console.log(!(3 <= 4));

let loggedInUser;

if (!loggedInUser) {
    console.log('GET OUT OF HERE!');
}

let flavor = 'watermelon';

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log("WE DON'T HAVE THAT FLAVOR!");
}