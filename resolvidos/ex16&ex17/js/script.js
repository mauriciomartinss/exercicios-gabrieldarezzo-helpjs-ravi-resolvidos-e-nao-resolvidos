let resultado = document.querySelector('#resultado')
let res = document.querySelector('#res')

// fiquei com preguiça de mudar o exercício 10 huahua

res.addEventListener('click', (n1, n2) => {
    n1 = document.querySelector('#n1').value
    n2 = document.querySelector('#n2').value

    if (n1 == '' || n2 == '') {
        return resultado.value = 0
    } else {
    
        return resultado.value = Number(n1) + Number(n2)
    }

})
