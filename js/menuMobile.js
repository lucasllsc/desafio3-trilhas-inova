const buttonMenu = document.querySelector('.button__menu')

const menuMobile = document.querySelector('.cabecalho__mobile')
let menuOpen = false

buttonMenu.addEventListener('click', () => {
    menuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')
 
    menuOpen ? buttonMenu.children[0].setAttribute('class', 'fa-solid fa-bars') : buttonMenu.children[0].setAttribute('class', 'fa-solid fa-xmark')

    menuOpen = !menuOpen
})