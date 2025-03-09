var name = prompt("What is your name?");
alert(`Hi, ${name}. Want to see something cool?`);
document.querySelector('html').innerHTML = `
  <h1>Welcome to ${name}'s site!</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif">
`;

alert("Hey, you're back for more?");

alert("Hello, world!");
console.log("Hello from the console.");
alert("Thanks for visiting");
document.write("<h1>Welcome to my web page.</h1>");

// 1. Display an alert dialog with the content: "Warning! This message will self-destruct in"
alert("Warning! This message will self-destruct in");

// 2. Display a "3... 2... 1..." countdown using 3 alert dialog boxes
alert("3..."); 
alert("2..."); 
alert("1..."); 

// 3. This statement selects the <h1> element and replaces its text with "BOOM!".
document.querySelector("h1").textContent = "🔥BOOM!🔥";

// 4. Log "Message destroyed!" to the console
console.log("Message destroyed!");

var message = "Hello!";
console.log(message);
message = "Hello from JavaScript Basics";
console.log(message);
var score = 0;
score += 10;
score += 5;

var bonusPts = 100;
var finalScore = score + bonusPts;
console.log(finalScore);
const htmlSnippet = '<h1 class="headline">My Headline</h1>';
const message = 'I\'m a programmer!';

const multiline = "Hello, students. \
Welcome to JavaScript Basics. \
I hope you learn a lot!";

console.log(multiline);

const name = prompt('What is your name?');

const message = "Hello" + name;

console.log(message);


const passphrase = 'I Have Spoken';
console.log( passphrase.toUpperCase() );
console.log(passphrase);

const name = prompt('What is your name?');
console.log(name);
const name = prompt("What is your name?");
let message = "Hello, " + name + ". Welcome to my music site. ";
message += "I'm so happy that you came by to visit, ";
message += name;
message += ". Feel free to come again and listen to more music!";

console.log(message);

const name = prompt('What is your name?');

const message = `Hello, ${name}. Welcome to my music site. I'm happy that you came by to visit, ${name}. Please come again and listen to more music!`;

console.log(message);
const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMessage;

// 1. Declare variables and capture input.
const adjective = prompt('Please type an adjective.');
const verb = prompt('Please type a verb.');
const noun = prompt('Please type a noun.');

// 2. Combine the input with other words to create a story.
const sentence = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = sentence;

/*
  The Number Guessing Game
  stores a number between 1 and 10
  and gives a player one attempt to
  guess the number.
*/
// When the game begins, the guess is false
let correctGuess = false;
const number = 6; // number to guess

const guess = prompt('Guess a number between 1 and 10.');

/*
  1. Test if a player's guess matches the number
  2. Change the value of correctGuess to true if they match
*/

if ( +guess === number ) {
  correctGuess = true; 
}
// Test if guess is correct and output response
if ( correctGuess ) {
  console.log('You guessed the number!');
} else {
  console.log(`Sorry. The number was ${number}.`);
}
const answer = prompt('Which planet is closest to the sun?');

if ( answer.toUpperCase() === 'MERCURY' ) {
  console.log("That's correct!");  
} else {
  console.log("Sorry, that's incorrect");
}




const weather = 'snow';

if ( weather === 'sun' ) {
  console.log("It's sunny, so I'm going swimming.");
  
} else if ( weather === 'rain' ) {
  console.log("It's raining, so I will read a book.");
  
} else if ( weather === 'snow' ) {
  console.log("It's snowing, so I'm going sledding.");
  
} else {
  console.log("I don't know what I'm doing today.");
}
