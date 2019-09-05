let form = document.querySelector('.contact__form');
let btnOpen = document.querySelector('.write-to-us');
let btnClose = document.querySelector('.contact__form-close')

btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "block";
})

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "none";
})