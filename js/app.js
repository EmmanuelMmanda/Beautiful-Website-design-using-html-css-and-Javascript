//selectors
const hamburger = document.querySelector('.hamburger');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');

const navItems = document.querySelector('.nav-items');


//event listerners
hamburger.addEventListener( 'click', () => {
        
        span1.classList.toggle('toggle1')
        span2.classList.toggle('togglenone')
        span3.classList.toggle('toggle2')

        navItems.classList.toggle('mobile');
        
});

//functions 
