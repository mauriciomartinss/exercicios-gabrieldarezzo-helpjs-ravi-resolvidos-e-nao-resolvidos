/*
obs: quando você tentar apagar o cpf, provavelmente vai bugar huahuauhhu. 
    dessa maneira, segure o backspace para apagar tudo!
*/ 

let cpf = document.querySelector('#cpf') //input dos dados
let cpfRes = document.querySelector('#cpf-res') // destino dos dados 



cpf.addEventListener('keyup', () => {
    if (cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += '.'
    }

    if (cpf.value.length == 11){
        cpf.value += '-'
    }

    return cpfRes.innerHTML = cpf.value
})





