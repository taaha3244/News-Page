const btn=document.querySelector('.closebtn');
const items=document.querySelector('.items');
const open=document.querySelector('.menu-icon')
btn.addEventListener('click',function(){
    items.style.left='900rem'
})
open.addEventListener('click',function(){
    items.style.left='15rem'
})