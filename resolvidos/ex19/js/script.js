
let test = document.querySelector('#test')

test.addEventListener('click', n => {
    n = document.querySelector('#number').value

    if (n % 2 == 1) {
        return window.alert(`${n} é um número ímpar`)
    } else {
        return window.alert(`${n} é um número par`)
    }

})