/* document.addEventListener("DOMContentLoaded", () =>{
    console.log('se cargo')
}) */

console.log('nose ')
const btnmain = document.getElementById('btn_main')
const moddalcontainer = document.getElementById('moddalcontainer');
const buttonclose = document.getElementsByClassName('bottonclose')[0];
        
btnmain.addEventListener('click', () =>{
moddalcontainer.classList.add('show');
        
})


buttonclose.addEventListener('click', () =>{
    moddalcontainer.classList.remove('show')
})



/*  */