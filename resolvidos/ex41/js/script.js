let i = 5
let campo = document.querySelector('#campo')

window.addEventListener('load', function f() {  
     campo.innerHTML = `<li>${i}</li>`
     i--
     if (i >= 1) {
        setTimeout( f, 1000)
     }
     
})


