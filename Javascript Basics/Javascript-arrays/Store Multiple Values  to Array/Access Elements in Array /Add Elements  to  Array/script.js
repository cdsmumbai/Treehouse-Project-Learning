const instruments=['piano', 'druns','trumpet'];
instruments.push('guitar','violin','triangle');
instruments.unshift('cowbell','tuba');
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];
const  brass=['trumphet', 'trombone','french horn', 'baritone', 'tuba'];
const  woodwind=['flute', 'oboe', 'clarinet', 'saxophone','bassoon'];
const instruments1=[...brass, ...woodwind];
brass.push('flugelhorn');
const numbers=[10,20,30,40];

console.log(Math.min(...numbers));

const inStock =['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce','carrots','brocoli', 'potatos', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const  search =prompt('Search for a product');
let  message;

if (inStock.includes(search)) {
    message=`Yes, we have <strong>${search}</strong>.`;}
    else{ 
        message = `Sorry, we do  not  ahve <strong>${search}</strong>.`;
    }  
   document.querySelector('main').innerHTML=`<p>${message}</p>`;
if (!search) {
    message=`<strong>In stock:</strong> ${inStock.join(',  ')}`;
} else if (inStock.includes(search.toLowerCase())) {
    message = `Yes , we have  <strong>${search}</strong>${search}</strong>.
     It's ${inStock.indexOf(search.toLowerCase()) +1} on the  list!`;      
    } else {  message=`Sorry, we do not have <strong>${search}</strong>.`} 
      


document.querySelector('main').innerHTML=`<p>${message}</p>`;
const playlist=[
    ['So What', 'Miles Davis', '9:04'],
    ['Respect', 'Aretha Franklin', '2:45'],
    ['What a  Wonderful World', 'Louis Armstrong', '2:21'],
    ['At Last', 'Ella Fitzgerald', '4:18'],
    ['Three Little Birds', 'Bob Marley and  the  Wailers', '3:01'],
    ['The  Way  You Look Tonight', 'Frank Sintara', '3:21']
];
const myArtists=`${playlist[0][1]}, ${playlist[1][1]}, ${playlist[1][1]}`;
console.log(myArtists);

function createListItems(arr) {
    let  items='';
    for (let  i =0; i < arr.length; i++) {
        items +=`<li>${arr[i][0]}, by ${arr[i][1]} - ${arr[i][2]} </li>`; 
    }
    return items;
}   
document.querySelector('man').innerHTML=
 `<ol> ${creastListItems(playlist)} 
  </ol>  
 `;
//create multidimensional  array  to hold  quiz questions  and  answers 
const  questions =[
    [ 'How  many  planets  are in t he  Solar System?', '8'],
    ['How  many  Continents  are  there?', '7'],
    ['How many legs does an  insect have?', '6'],
    ['What year  was JavaScript created?', '1995']
];

//2. Store the  number  of  questions  answered correctly 
let  correctAnswers=0;
/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i=0; i<questions.length; i++) {
    let  question=questions[i][0];
    let answer=questions[i][1];
    let response=prompt(question);

    if (response === answer) {
        correctAnswers++;
    }
}

//4. Display the number of correct answers to the user
let  html =`<h>You got ${correctAnswers} question(s) correct</h1>`;

document.querySelector('main').innerHTML=html;