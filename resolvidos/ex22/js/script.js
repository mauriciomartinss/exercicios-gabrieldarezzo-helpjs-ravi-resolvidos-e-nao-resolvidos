let calc = document.querySelector('#calc')

// que daora!! eu não lembrava disso:
let anoAtual = new Date().getFullYear()

calc.addEventListener('click', n => {
    n = document.querySelector('#n').value
    r = anoAtual - n

    if (r < 18) {
        return window.alert(`você tem ${r} anos de idade. Você ainda é menor de idade`)
    } else {
        return window.alert(`você tem ${r} anos de idade. Você é maior de idade`)
    }
})