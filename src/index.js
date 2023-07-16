const content = document.getElementById('content');
const main = document.querySelector('main');
const navItems = document.querySelectorAll('.nav-item');
let homeBtn = document.getElementById('home-btn');
let menuBtn = document.getElementById('menu-btn');
let aboutBtn = document.getElementById('about-btn');
let contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', () => {
    main.innerHTML = `<div class="info">
    <div class="text-container">
        <p class="title">Lorenzo's</p>
        <p class="sub-title">Pizza Restaurant</p>
    </div>
    <div class="img-container">
        <p class="img-caption">Made fresh since 1967</p>
        <img src="https://api.europeana.eu/thumbnail/v3/400/0ff71ad56eb924ecc4c656838308f2e4">
    </div>
</div>`
})

menuBtn.addEventListener('click', () => {
    main.innerHTML = ``
})

aboutBtn.addEventListener('click', () => {
    main.innerHTML = ``
})

contactBtn.addEventListener('click', () => {
    main.innerHTML = ``
})