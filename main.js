console.log('Hello World!');


function scrollToEvent(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
};

const icon = document.querySelector('.navbar');

const menu = document.querySelector('nav ul');


icon.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})
