const secretWord = 'tomato';
let  message ='Access denied';

for (let i =5; i>=1; i--) {
   let guess=prompt(`Enter the  secret  word, You  ahve  ${i} tries`);
   if (guess === secretWord) {
    message='Welcome to the  secret  loop world!'
   }
}
alert(message);

const  main =document.querySelector('main');
let  html ='';

for (let i =5;  i <= 100; i+=5) {
    html += `<div>${i}</div>`;
}
main.innerHTML=html;

const randonmNumber = getRandomNumber(10);
let guess;
let  attempts =0;

function  getRandomNumber(upper) {
    return Math.floor(Math.random() *  upper) + 1;
}
do {
    guess= prompt('I  am  thinking  of  a number  between 1  and  10  . What is  it?');
    attempts++
    if (parseInt(guess) === randonmNumber) {
        main.innerHTML =`
        <h1>You  guessed  the  number!</h1>
        <h2> It took you ${attempts} tries to guess the number ${randonmNumber}.</h2> `;
    }
 } while (parseInt(guess) !== randonmNumber);



let counter  = 0;
while  (counter < 10) {
    console.log(` The  random number  is ${getRandomNumber(10)}`);
    counter +=1;
}
//let counter  = 0;
do {
    console.log(` The  random number  is ${getRandomNumber(10)}`);
    counter +=1;
} while (counter < 10); 

for  (i=0; i < 10; i++) {
    console.log(`The  random  nUmber is  ${getRandomNumber(10)}`);
}