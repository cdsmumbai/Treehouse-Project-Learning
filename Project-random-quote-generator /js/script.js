/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//create  array to  to  hold the objects 
 const quotes=[ 
   { quote:  'Be yourself; everyone else is already taken.',
     source : 'Oscar Wilde',
     citation : 'Famous Quotes Collection',
     year : '1880' ,
     tags: ['inspiration']  // Extra property added
   }, {quote:  'A small step for man, a giant leap for mankind.',
       source :  'Neil Armstrong', 
       ciation : 'quotecascade.com',
       year : '1969'
   }, {quote: 'The only person you are destined to become is the person you decide to be', 
       source : 'Ralph Waldo Emerson', 
       ciation :  'gopius.com',
       year : '1841'
   },
      {quote : 'It is still best to be honest and truthful; to make the most of what we have; to be happy with simple pleasures; and have courage when things go wrong.',
       source : 'Laura Ingalls Wilder',
       ciation : 'gopius.com',
       year : ''
     },
      { quote : 'It does not matter how slowly you go as long as you do not stop.',
      source :'Confucius',
      citation : 'gopius.com',
       year : ''
     }
 ];



/***
 * `getRandomQuote` function
***/
function  getRandomQuote() {
  //  Create a variable that generates a random number between zero and the last index in the `quotes` array
  
 const  randomIndex =Math.floor(Math.random() * quotes.length);

 //  Return the variable storing the random quote object
 return quotes[randomIndex];
}

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
/***
 * `printQuote` function
***/
  
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote()  function
      const randomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with  
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties
      let htmlString = `<p class="quote">${randomQuote.quote}</p>`;
      htmlString += `<p class="source">${randomQuote.source}`;


  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
      if (randomQuote.citation) {
         htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    htmlString += `<span class="tags"> - Tags: ${randomQuote.tags.join(', ')}</span>`;
  }

  // concatenate the closing </p>  tag to the HTML string
     htmlString += `</p>`;

  // 6. set the innerHTML of the quote-box div to equal the complete HTML string
  document.getElementById("quote-box").innerHTML = htmlString;
  // Update the background color with each new quote
  changeBackgroundColor();
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
// Call changeBackgroundColor to update the background color
//changeBackgroundColor();
// update the quote every 15 seconds (15000 milliseconds)
setInterval(printQuote, 15000);