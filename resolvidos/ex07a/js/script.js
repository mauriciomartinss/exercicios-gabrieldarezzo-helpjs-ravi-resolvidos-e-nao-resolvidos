let name = document.querySelector('#name')
let lastname = document.querySelector('#lastname')
let res = document.querySelector('#res')

res.addEventListener('click', () => alert(`Olá ${name.value}${lastname.value}`))