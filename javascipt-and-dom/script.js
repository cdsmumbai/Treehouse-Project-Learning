/*const body= document.body;
body.addEventListener('click', () => {
    body.innerHTML='<h1>Hello, world!</h1>';
  }); 
*/
/*const  btnUpdate= document.getElementById('btn-main');
const headline=document.getElementById('headline');

const items=document.getElementsByTagName('li');
const highlights =document.getElementsByClassName('highlight');


for (const highlight of highlights) {
    highlight.style.backgroundColor='cornsilk';
}
for (let  i=0; i <items.length; i++ ) {
    items[i].style.color='orchid';
}

btnUpdate.addEventListener('click', () => {
   // headline.style.border='solid 2px red';
   // headline.style.fontsize='60px';

  });
  */
 
/* const btnUpdate = document.querySelector('.btn-main');
 const  btnToggle=document.querySelector('.btn.toggle');
 btnUpdate.addEventListener('click', () => {
   const headline=document.getElementById('headline');
   const input = document.querySelector('.input-main');
   headline.className='grow';
   headline.textContent =input.value;
   input.value='';
   });

   btnToggle.addEventListener('click', () {
    const listContainer=document.querySelector('.list-container');

      if (listContainer.style.display === 'none') {
        btnToggle.textContent ='Hide List';
        listContainer.removeAttribute('style');
      } else {
        btnToggle.textContent='Show List';
        listContainer.style.display='none';
      }
   });
   */
  /*
  const btnCreate=document.querySelector('.btn-main');
  const  btnToggle=document.querySelector('.btn.toggle');
  
  btnCreate.addEventListener('click', () => {
    const  input=document.querySelector('.input-main'); //added  for append node
    const list =document.querySelector('ul');
    const item=document.createElement('li');
    item.textContent=input.value;
    console.log(item);
  input.value ='';
    list.prepend(item); // added  for  append node      
  });

  btnToggle.addEventListener('click', () => {
    const listContainer=document.querySelector('.list-container');

      if (listContainer.style.display === 'none') {
        btnToggle.textContent ='Hide List';
        listContainer.removeAttribute('style');
      } else {
        btnToggle.textContent='Show List';
        listContainer.style.display='none';
      }
   });

  */ 
  const btnCreate=document.querySelector('.btn-main');
  const  btnToggle=document.querySelector('.btn-toggle');
  const btnRemove=document.querySelector('.btn-remove');
  btnCreate.addEventListener('click', () => {
    const  input=document.querySelector('.input-main'); //added  for append node
    const list =document.querySelector('ul');
    //const item=document.createElement('li');
    //item.textContent=input.value;
    //console.log(item);
  //input.value ='';
   // list.prepend(item); // added  for  append node
    list.insertAdjacentHTML('afterbegin', 
      `<li>${nput.value}</li>`
    );
    input.value='';      
  });

  btnToggle.addEventListener('click', () => {
    const listContainer=document.querySelector('.list-container');

      if (listContainer.style.display === 'none') {
        btnToggle.textContent ='Hide List';
        listContainer.removeAttribute('style');
      } else {
        btnToggle.textContent='Show List';
        listContainer.style.display='none';
      }
   });

   btnRemove.addEventListener('click', () => {
      const lastItem=document.querySelector('li:last-child');
      lastItem.remove(); 

   });