const hamburgerButton = document.querySelector('[data-ja="hamburger"]');
const nav = document.querySelector('nav');
hamburgerButton.addEventListener('click', function(){
    nav.classList.toggle("active");

})
