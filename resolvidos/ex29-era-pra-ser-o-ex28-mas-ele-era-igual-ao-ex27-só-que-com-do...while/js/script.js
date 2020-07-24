let campo = document.querySelector('#resultado')

let i = 1

// era pra ser o 28 mas eu acabei fazendo o 29 por cima huehueuheuhe

do {
    campo.insertAdjacentHTML('beforeend', ` ${i}`)
    i++
} while (i <= 10)