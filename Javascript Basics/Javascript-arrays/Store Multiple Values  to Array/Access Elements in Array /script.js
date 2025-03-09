const  instruments =['piano', 'drums', 'trumpet'];
const  planets =['Mercury', 'Venus', 'Earth', 'Mars'];
console.log(planets[0]);
console.log(planets[1]);
const playlist=['So What',
    'Respect', 'What a  Wonderful World',
    'At Last', 'Three Little Birds',
    'The  Way  You Look Tonight'];

function creastListItems(arr) {
    let  items='';
    for (let  i =0; i < arr.length; i++) {
        items +=`<li>${arr[i]}</li>`; 
    }
    return items;
}   
document.querySelector('man').innerHTML=
 `<ol> ${creastListItems(playlist)} 
  </ol>  
 `;
 
 const inStock =['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce','carrots','brocoli', 'potatos', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
 const  search =prompt('Search for a product');
 let  message;

 const  middle=['lettuce','cheese', 'patty'];
 const  burger =['top bun', 'bottom bun'];