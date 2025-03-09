let  html='';
let  red;
let  green;
let  blue;
let  randomRGB;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">1</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">2</div>`;


red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">3</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">4</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">5</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">6</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">7</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">8</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">9</div>`;

red =Math.floor(Math.random()* 256 );
green =Math.floor(Math.random()* 256 );
blue =Math.floor(Math.random()* 256 );
randomRGB =`rgb({red}, ${green}, ${blue})`;
html=`<div style="background-color : ${randomRGB}">10</div>`;

document.querySelector('main'),innerHTML=html;


for (let i =1; i <=10; i++ ) {
    red =Math.floor(Math.random()* 256 );
    green =Math.floor(Math.random()* 256 );
    blue =Math.floor(Math.random()* 256 );
    randomRGB =`rgb({red}, ${green}, ${blue})`;
    html +=`<div style="background-color : ${randomRGB}">${i}</div>`;
     
}
document.querySelector('main'),innerHTML=html;


let  html1 ='';
const  randomValue = () => Math.floor(Math.random()*256);

function randomRGB(Value) {
    const  color = `rgb(${value()}, ${value()}, ${value()})`;
    return color;
}

for (let i =1; i <=10; i++) {
    html += `div style="background-color: ${randomRGB(randomValue)}">${i}</div`;
}

document.querySelector('main').innerHTML=html1;
function changeBackgroundColor() {
    // Generate random values for red, green, and blue (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Create an RGB color string
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
    // Update the background color of the page
    document.body.style.backgroundColor = randomColor;
  }