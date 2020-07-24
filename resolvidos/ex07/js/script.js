let img= document.querySelector('#img')

img.addEventListener('mouseover', () => {
    img.src = "./assets/lampada-on.jpg"
})

img.addEventListener('mouseout', () => {
    img.src = "./assets/lampada.jpg"
})


