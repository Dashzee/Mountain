let sun = document.getElementById('sun');
let mountain = document.getElementsByClassName('behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value*1.05 +'px';
    text.style.left = value * 2 + 'px';
    btn.style.marginright = value * 1 + 'px';
})