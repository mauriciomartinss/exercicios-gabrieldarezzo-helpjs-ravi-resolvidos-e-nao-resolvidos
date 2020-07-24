let sort = document.querySelector('#sort')


sort.addEventListener('click', () => {
    let number = document.querySelector('#n')
    let randomNumber = (Math.floor(Math.random() * 11))

    if (number.value == 0 || number.value >= 10 || number.value <= 0) {
        window.alert('digite um valor válido (0 - 10)')
    } else if (number.value == randomNumber){
        return window.alert(`Número sorteado: ${randomNumber}. Você adivinhou. ieieieieieiei!`)
    } else {
        return window.alert(`Número sorteado: ${randomNumber}. Você não conseguiu. tente novamente!`)
    }

})

// acho que o 'Math.floor' é para achar números inteiros. E o vezes 101 é pra achar número de 0 - 100 