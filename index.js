const toggle = document.getElementById('toggle-container');
let circle = document.getElementById('circle');
const day = document.getElementById('day');
const night = document.getElementById('night');
const body = document.body
console.log(body.style);
toggle.addEventListener('click', (e) => {
    // console.log("Hello world!" , e);
    document.body.classList.toggle('dark-mode');
    circle.style.transform = 'translateX(calc(100% + 10px))';
    document.body.style.transition = 'background-color 1s, color 1s';
    // circle.style.transform = 'translate(60px)';
    circle.style.transition = 'transform .5s'
    circle.style.overflow = 'hidden';
    day.style.visibility = 'visisible';
})

