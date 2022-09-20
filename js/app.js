//selectors for header
const hamburger = document.querySelector('.hamburger');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const navItems = document.querySelector('.nav-items');

const body = document.querySelector('body');
const moon = document.querySelector('.theme .moon');
const sun = document.querySelector('.theme .sun');

//event listerners for nav
hamburger.addEventListener( 'click', () => {
        
        span1.classList.toggle('toggle1')
        span2.classList.toggle('togglenone')
        span3.classList.toggle('toggle2')
        navItems.classList.toggle('mobile');
        
});
//dark and light theme
moon.addEventListener( 'click', () => {
           body.classList.toggle('dark'); 
           moon.style.display = "none";
           sun.style.display = "block";
});
sun.addEventListener( 'click', () => {
        body.classList.toggle('dark'); 
        sun.style.display = "none";
        moon.style.display = "block";
});



//staff cards selectors

const Moretoggler = document.querySelector('.more-toggle');
const toggler = document.querySelector('.more-toggle .toggle');
const MoreCard = document.querySelector('.more-card');



//Event Listener toggle
Moretoggler.addEventListener( 'click' , () => {
        if(toggler.classList.contains('active')){
                toggler.classList.remove('active');
        }else{
          toggler.classList.add('active') ;
        }
});

