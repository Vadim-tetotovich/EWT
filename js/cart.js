// buttons
const btnBackToCatalog = document.querySelector('.btnBackToCatalog')

btnBackToCatalog.addEventListener('click', () => {
    window.location = '../html/catalog.html'
})

// effect

const text = 'The cart is empty...'
let textLength = 0

function typing() {
    if (textLength < text.length) {
        document.querySelector(".emptyCart").innerHTML += text.charAt(textLength);
        textLength++;
        setTimeout(typing, 50);
    }
}

typing();

// burger menu

const openMenu = document.querySelector('.openBurgerMenu')
const burgerMenu = document.querySelector('.burgerMenu')

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('activeMenu')
    burgerMenu.classList.toggle('menuActive')
})

const burgerLinks = document.querySelectorAll('.burgerLink')

burgerLinks.forEach((el) => el.addEventListener('click', closeMenu))

function closeMenu(event) {
    openMenu.classList.remove('activeMenu')
    burgerMenu.classList.remove('menuActive')
}