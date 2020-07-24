let campo = document.querySelector('#resultado')

for (let i = 2; i <= 20; i += 2) {
        campo.insertAdjacentHTML('beforeend', ` <p>${i}</p>`)

}
