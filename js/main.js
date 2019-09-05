let form = document.querySelector('.contact__form');
let btnOpen = document.querySelector('.write-to-us');
let btnClose = document.querySelector('.contact__form-close');
let mapIco = document.querySelector('.footer__map-ico');

btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "block";
    mapIco.style.display = "none";
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "none";
    mapIco.style.display = "block";
});