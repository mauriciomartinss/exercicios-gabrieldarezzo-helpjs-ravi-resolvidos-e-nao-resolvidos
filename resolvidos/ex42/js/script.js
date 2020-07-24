// tá estranho? tá. mas pelo menos eu consegui fazer hauahuuhauhauhuha
let bloco = document.querySelector('div')
let i = 3
let j = -30

setInterval(function f() {
   bloco.innerHTML = `<img style="transform: translateX(${j}px" class="bloco" src="./assets/chara-${i}.png">`
   i--
   j += 2
   
   if (i >= 3) {
      f()
   }

   if (j == 250) {
      j = -30
   }

   if (i == 0) {
      i += 3
      f()
   }

  
}, 200)



