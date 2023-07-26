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
        <img src="https://api.europeana.eu/thumbnail/v3/400/0ff71ad56eb924ecc4c656838308f2e4">
        <p class="img-caption">Made fresh since 1967</p>
    </div>
</div>`
})

menuBtn.addEventListener('click', () => {
    main.innerHTML = `<div class="info">
    <h1 class="sub-title">Our Menu</h1>
    <div class="menu-items">
            <p class="menu-title">Appetizers & Sides</p>
            <div class="food-items">
        <div class="food">
            <p class="food-cap">Mozzarella Sticks</p>
            <p class="food-cap">$6.95</p>
            <img src="https://i.redd.it/0dolvq8uts181.gif">
        </div>
        <div class="food">
            <p class="food-cap">French Fries</p>
            <p class="food-cap">$4.99</p>
            <img src="https://i.redd.it/h6yfu3guts181.gif">
        </div>
        <div class="food">
            <p class="food-cap">Chicken Wings</p>
            <p class="food-cap">$8.99</p>
            <img src="https://ia903205.us.archive.org/29/items/rotatingfood4/giphy%20-%202020-08-11T155724.088.gif">
        </div>
        <div class="food">
            <p class="food-cap">Garlic Knots</p>
            <p class="food-cap">$7.50</p>
            <img src="https://ia903205.us.archive.org/29/items/rotatingfood4/giphy%20-%202020-08-11T160452.466.gif">
        </div>
      </div>
    </div>
    <div class="menu-items">
        <p class="menu-title">Sandwiches & Subs</p>
        <div class="food-items">
            <div class="food">
                <p class="food-cap">Chicken Parm Sub</p>
                <p class="food-cap">$10.95</p>
                <img src="https://ia803205.us.archive.org/29/items/rotatingfood4/giphy%20%2854%29.gif">
            </div>
            <div class="food">
                <p class="food-cap">Meatball Sub</p>
                <p class="food-cap">$10.95</p>
                <img src="https://rotatingsandwiches.files.wordpress.com/2023/03/meatball-sub.gif">
            </div>
            <div class="food">
                <p class="food-cap">Bacon Chicken Sandwich</p>
                <p class="food-cap">$10.99</p>
                <img src="https://ia804505.us.archive.org/7/items/rotatingfood5/giphy%20-%202021-06-01T142419.651.gif">
            </div>
            <div class="food">
                <p class="food-cap">Philly Cheesesteak</p>
                <p class="food-cap">$10.95</p>
                <img src="https://rotatingsandwiches.files.wordpress.com/2023/02/chopped-cheese.gif?w=480">
            </div>
        </div>
    </div>
    <div class="menu-items">
        <p class="menu-title">Specialty Pizzas</p>
        <div class="food-items">
            <div class="food">
                <p class="food-cap">Plain Cheese Pizza</p>
                <p class="food-cap">$14.99</p>
                <img src="https://www.cicis.com/media/xpspbkds/cheese-pizza.png">
            </div>
            <div class="food">
                <p class="food-cap">Pepperoni Pizza</p>
                <p class="food-cap">$15.99</p>
                <img src="https://www.cicis.com/media/gvedawsa/pepperoni-pizza.png">
            </div>
            <div class="food">
                <p class="food-cap">Sausage Pizza</p>
                <p class="food-cap">$15.99</p>
                <img src="https://www.cicis.com/media/jaajgahs/sausage-pizza.png">
            </div>
            <div class="food">
                <p class="food-cap">Supreme Pizza</p>
                <p class="food-cap">$16.99</p>
                <img src="https://www.cicis.com/media/5jzgsmbq/supreme-pizza.png">
            </div>
        </div>
    </div>
    <div class="menu-items">
        <p class="menu-title">Desserts & Sweets</p>
        <div class="food-items">
            <div class="food">
                <p class="food-cap">Cookie Cheesecake</p>
                <p class="food-cap">$8.99</p>
                <img src="https://ia804505.us.archive.org/7/items/rotatingfood5/giphy%20-%202021-06-01T142454.206.gif">
            </div>
            <div class="food">
                <p class="food-cap">Chocolate Chip Cannoli</p>
                <p class="food-cap">$5.99</p>
                <img src="https://ia904505.us.archive.org/7/items/rotatingfood5/giphz.gif">
            </div>
            <div class="food">
                <p class="food-cap">Slice of Chocolate Cake</p>
                <p class="food-cap">$7.99</p>
                <img src="https://ia904505.us.archive.org/7/items/rotatingfood5/giphy%20-%202021-06-01T143833.467.gif">
            </div>
            <div class="food">
                <p class="food-cap">Slice of Carrot Cake</p>
                <p class="food-cap">$7.99</p>
                <img src="https://ia904505.us.archive.org/7/items/rotatingfood5/giphy%20%285%29%20%282%29.gif">
            </div>
        </div>
    </div>
</div>`
})

aboutBtn.addEventListener('click', () => {
    main.innerHTML = ``
})

contactBtn.addEventListener('click', () => {
    main.innerHTML = ``
})