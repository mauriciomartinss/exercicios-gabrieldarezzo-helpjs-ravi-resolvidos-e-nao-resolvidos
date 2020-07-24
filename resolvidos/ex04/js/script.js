let name = document.querySelector('#name')
let button = document.querySelector('#show')

button.addEventListener('click', () => alert(`O nome completo é: ${name.value}`))