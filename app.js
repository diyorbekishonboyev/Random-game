"use strict"
const button = document.getElementById('tekshirish')
const input = document.getElementById ('inp')
const text = document.querySelector('p')
const bodyEl = document.querySelector('body')

button.addEventListener('click', function(e) 
{
    e.preventDefault()
    const random = Math.floor(Math.random()*10)+1;
    if(input.value==random){
        bodyEl.classList.add('yellowrandom')
        text.innerText = ` Topdingiz, bu son ${random} edi `
       }
       else {
        bodyEl.classList.add('bluerandom')
        text.innerText = ` Afsuski, bu son ${random} edi`
       }

})



