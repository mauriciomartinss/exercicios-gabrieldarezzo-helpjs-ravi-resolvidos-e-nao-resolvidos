let res = document.querySelector('#valor')
let add = document.querySelector('#add')

const valores = []

add.addEventListener('click', () => {
    let dados = document.querySelector('#txt')

    valores.push(dados.value)

    if((valores.length) % 2 == 0){
        res.insertAdjacentHTML('beforeend', `<li id="destaque">${valores[valores.length - 1]}</li>`)
    } else {
        res.insertAdjacentHTML('beforeend', `<li>${valores[valores.length - 1]}</li>`)
    }
})
    

    