//dark and light theme
moon.addEventListener( 'click', setdark = () => {
    body.classList.add('dark'); 
    moon.style.display = "none";
    sun.style.display = "block";
    localStorage.setItem('theme', 'dark');

});
sun.addEventListener( 'click', setLight = () => {
    body.classList.remove('dark'); 
    sun.style.display = "none";
    moon.style.display = "block";
    localStorage.setItem('theme', 'light');
});

const mode =  localStorage.getItem('theme');
// console.log("🚀 ~ file: theme.js ~ line 18 ~ mode", mode)
if(mode == 'light'){
   setLight()
}
if(mode == 'dark'){
    setdark()
}

