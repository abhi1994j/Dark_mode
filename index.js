const toggle = document.getElementById('toggle-container');
let circle = document.getElementById('circle');
const day = document.getElementById('day');
const night = document.getElementById('night');
toggle.addEventListener('click', ()=>{
   console.log("Hello world!");
//    body.toggle('.dark-mode');
   document.body.style.backgroundColor = 'black'
   document.body.style.color = '#fff';
   document.body.style.transition = 'background-color 1s, color 1s';  
   circle.style.transform = 'translate(60px)';
//    day.style.visibility = 'visisible';
})