const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu__item')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__item--ativo')
})