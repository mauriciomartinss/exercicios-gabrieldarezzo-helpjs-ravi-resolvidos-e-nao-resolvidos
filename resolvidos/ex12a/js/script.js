let red = document.querySelector('#red')
let green = document.querySelector('#green')
let elemento = document.querySelector('#elemento')

red.addEventListener('click', () => elemento.style.backgroundColor = 'red')
green.addEventListener('click', () => elemento.style.backgroundColor = 'green')