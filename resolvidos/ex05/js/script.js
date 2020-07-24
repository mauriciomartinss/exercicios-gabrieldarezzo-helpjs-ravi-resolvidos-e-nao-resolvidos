let txt = document.querySelector('#txt')
let button = document.querySelector('#show')

button.addEventListener('click', () => alert(`total de caracteres (e espaços vazios) que contém no texto: ${txt.value.length}`))