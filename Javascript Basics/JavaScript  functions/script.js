function alertRandom() {
    const  randonmNumber = Math.floor(Math.random() * 6) + 1;
    alert(randonmNumber);

}

alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();

console.log(getRandomNumber(6));
console.log(getRandomNumber(100));


function greeting() {
let person ='Meg';
alert(`Hi, ${person}!`);
}


function isFieldEmpty() {
    const field =document.querySelector('#info')
    if (!field.value) {
        return true;
     } else {
        return false;
     }
}

const fieldTest=isFieldEmpty();

is (fieldTest) {
    alert('Please provide your information');
}

function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
  }
  
  getRandomNumber();

 function getArea(width,length,unit) {
    const  area =  width * length;
    return `${area} ${unit}`;
 } 


 //global scope
 const  person = 'Lee';

 function greeting() {
    //function scope
    const  person = 'Meg';
    alert(`Hi, ${person}`);

 }

 greeting();
 alert(`Hi ${person}`);
 greeting();

 const  getRandomNumber = (upper) => {
    const randomNumber Math.floor(Math.random() * upper)+1);
    return randomNumber;
 };

 const getArea = (width, length, unit) => {
    const  area = width  * length;
    return `${area} ${unit}`;
 };

 function  sayGreeting(greeting = 'Good morning', name='student') {
    return `${greeting}, ${name}`;
 }

 /**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function  getRandomNumber(lower,upper =100) {
    return Math.floor(Math.random() * (upper - lower + 1)) +_lower;
}

//  call  the  function  and  pass it  different  values
console.log(getRandomNumber(1,6));
console.log(`{getRandomNumber(10)} is a random number between 10 and 100`);

function getRandomNumber(lower,upper =100) {
  if  ( isNaN(lower) || isNaN(upper)) {
    throw Error('Both arguments must  be  numbers');
  }
    return Math.floor(Math.random() * (upper - lower + 1)) +_lower;
}
console.log(getRandomNumber(1,6));
console.log(`{getRandomNumber(10)} is a random number between 10 and 100`);
console.log(getRandomNumber(200,'three hundered'));




//collect   input  from  user 
const  inputLow = prompt('Please provide  your  lowest  number');
const  inputHigh =prompt('Please provide  your  highest  number'); 

//convert  the  inout into  number 
const  lowNumber = pareseInt(inoutLow);
const  highNumber=pareseInt(inputHigh);


if (lowNumber >= 0  &&  highNumber) {
   //  use  math.random()  and  user  number  to  generate  random  number
   const  randomNumber=Math.floor(Math.random() * (highNumber - lowNumber +1)) + lowNumber;
   
   //create  a  message  displaying the  random  number 
   console.log(`${randomNumber} is a random number  between ${lowNumber} and  ${highNumber}`);
 } else {
   console.log('You  need  to  provide  two  number. Try  again.')
 }



const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

console.log(typeof HTMLBadges, typeof CSSBadges);

const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`);

let yearsAlive;
console.log(`I've been alive for more than [x] seconds!`);
const pi = prompt('What is Pi?');
console.log( +pi === 3.14 );

const dieRoll = Math.floor( Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll}.`);
