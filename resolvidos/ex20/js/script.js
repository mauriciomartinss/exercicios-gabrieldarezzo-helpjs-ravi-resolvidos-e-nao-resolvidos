let multiplicar = document.querySelector('#times')

multiplicar.addEventListener('click', (n1, n2) => {
    n1 = document.querySelector('#n1').value
    n2 = document.querySelector('#n2').value

    return window.alert(n1 * n2)

})