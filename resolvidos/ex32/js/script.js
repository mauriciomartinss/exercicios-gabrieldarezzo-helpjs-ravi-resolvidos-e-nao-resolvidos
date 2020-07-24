let find = document.querySelector('#find')

find.addEventListener('click', () => {
    let frase = 'LoL é melhor que Dota'
    if (frase.indexOf('Dota') == -1) {
        return window.alert('falso')
    }
    else {
        return window.alert('verdadeiro ')
    }
})

let find1 = document.querySelector('#find1')

find1.addEventListener('click', () => {
    let frase1 = 'LoL não tem nada haver com CS. Por isso não devem ser comparados!'
    if (frase1.indexOf('Dota') == -1) {
        return window.alert('falso')
    }
    else {
        return window.alert('verdadeiro')
    }
})

// obs: tenta achar uma forma de pegar o retorno do método indexOf()
// na verdade se você não tiver preguiça de ler, provavelmente vai achar em 5 min.
