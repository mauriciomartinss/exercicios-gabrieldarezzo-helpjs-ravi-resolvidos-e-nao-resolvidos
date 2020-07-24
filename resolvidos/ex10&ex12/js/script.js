// aqui são as variáveis que recebem os números digitados
let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')

// aqui é a variável que pega o input:number que recebe o output
let resultado = document.querySelector('#resultado')

// aqui é a variável do button
let res = document.querySelector('#res')


res.addEventListener('click', () => {
    let soma = Number(n1.value) + Number(n2.value)
    resultado.value = soma
})