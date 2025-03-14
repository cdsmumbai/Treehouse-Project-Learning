const form = document.getElementById('registrar');
const  input=form.querySelector('input');

form.addEventListener('submit', (e) => {
e.preventDefault();
const text=input.value;
input.value='';
const  ul=document.getElementById('invitedList');
const li=document.createElement('li');
li.textContent=text;
ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
    const checkbox= event.target;
    const  checked=checkbox.checked;
    const  listItem=checkbox.parentNode.parentNode;
  
    if (checked) {
        listItem.className='responded';
    } else {
        listItem.className='';
    }

});


ul.addEventListener('click', (e) => {
    if (e.target.tagName==='BUTTON') {
        const li=e.target.parentNode;
        const ul=li.parentNode;
        ul.removeChild(li);
    }
});