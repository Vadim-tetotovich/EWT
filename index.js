// buttons

const welcomeBtn = document.querySelector('.welcomeBtn')
const saleBtn = document.querySelector('.saleBtn')
const cartbtn = document.querySelector('.cart')


welcomeBtn.addEventListener('click', () => {
    window.location = 'html/catalog.html'
})

saleBtn.addEventListener('click', () => {
    window.location = 'html/catalog.html'
})

cartbtn.addEventListener('click', () => {
    window.location = 'html/cart.html'
})


//header

// window.onscroll = function() { headerFixed() }

// const header = document.querySelector('.header')
// let sticky = header.offsetTop

// function headerFixed() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add('sticky')
//     } else {
//         header.classList.remove('sticky')
//     }
// }


// search

const inputSearch = document.querySelector('.search')
const clearBtn = document.querySelector('.clearTextInput')

clearBtn.addEventListener('click', () => {
    inputSearch.value = ''
})


// count

let countProduct = document.querySelector('.productCount')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

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

// email


const email = document.querySelector('.inputEmail')
const emailBtn = document.querySelector('.mailIcon')

emailBtn.addEventListener('click', () => {
    validEmail()
})


function validEmail() {
    const emailValue = email.value
    const re = /^[\w-\.]+@[\w-\.]+\.[a-z]{2,4}$/i
    const valid = re.test(emailValue)



    if (valid) {
        console.log('Все правильно')
    } else {
        console.log('Не правильно')
    }
}