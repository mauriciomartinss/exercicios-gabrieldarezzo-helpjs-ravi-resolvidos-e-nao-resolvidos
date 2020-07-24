let campo = document.querySelector('#resultado')

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let m = i * j
        campo.insertAdjacentHTML('beforeend', `<p>${i} X ${j} = ${m}</p> <br>`)
    }
    campo.insertAdjacentHTML('beforeend', `<br>`)
}