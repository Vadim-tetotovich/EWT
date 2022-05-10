// buttons
const cartbtn = document.querySelector('.cart')

cartbtn.addEventListener('click', () => {
    window.location = 'cart.html'
})


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