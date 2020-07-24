const valores = []
let res = document.querySelector('#valor')
let add = document.querySelector('#add')

add.addEventListener('click', () => {
    let dados = document.querySelector('#txt')

    valores.push(dados.value)
    let ultimoValor = valores.length - 1
    
    res.insertAdjacentHTML('beforeend', `<li>${valores[valores.length - 1]}</li>`)


})
    

    