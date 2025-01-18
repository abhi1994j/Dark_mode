const toggle = document.getElementById('toggle-container');
let circle = document.getElementById('circle');
const body = document.querySelector('body');
console.log(body.style);
let h1 = document.querySelector('h1');

let toggled = false;
toggle.addEventListener('click', () => {
    // console.log("Hello world!" , e);
    if(!toggled){
        h1.style.color = '#fff';
        body.style.backgroundColor = 'black';
        circle.classList.add('dark-mode');
        toggled = true;
    }
    else{
        h1.style.color = 'black';
        body.style.backgroundColor = '#fff';
        circle.classList.remove('dark-mode');
        toggled = false;
    }
    // document.body.classList.toggle('dark-mode');
    // circle.style.transform = 'translateX(calc(100% + 10px))';
    // document.body.style.transition = 'background-color 1s, color 1s';
    // // circle.style.transform = 'translate(60px)';
    // circle.style.transition = 'transform .5s'
    // circle.style.overflow = 'hidden';
    // day.style.visibility = 'visisible';
})

