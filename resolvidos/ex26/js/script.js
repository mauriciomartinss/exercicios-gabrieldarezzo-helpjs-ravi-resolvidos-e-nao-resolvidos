let campo = document.querySelector('#resultado')

let arroy = [0, 1, 2, 3, 4]

arroy.forEach(() => {
    return campo.insertAdjacentHTML('beforeend', `<h1>Repeticão</h1>`)
});
