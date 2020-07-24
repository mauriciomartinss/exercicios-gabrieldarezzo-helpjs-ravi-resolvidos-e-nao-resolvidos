let cpf = document.querySelector('#cpf') //input
let cpfRes = document.querySelector('#cpf-res') //pra onde os dados irão


cpf.addEventListener('keyup', () => {
    if (cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += '.'
    }

    if (cpf.value.length == 11){
        cpf.value += '-'
    }

    return cpfRes.innerHTML = cpf.value
})

// let cpf = document.querySelector('#cpf')
// let cpfRes = document.querySelector('#cpfRes')
// let formatar = document.querySelector('#format')

// formatar.addEventListener('click', () => {
   
//     return cpfRes.value =  cpf.value.replace( /(\d{3})(\d{3})(\d{3})(\d{2})/, (regex, argumento1, argumento2, argumento3, argumento4) => {
//         return `${argumento1}${argumento2}${argumento3}${argumento4}`
//     })
// })



// // cpf.addEventListener('keyup', () => {
// //     if (cpf.value.length == 3 || cpf.value.length == 7){
// //         cpf.value += '.'
// //     }

// //     if (cpf.value.length == 11){
// //         cpf.value += '-'
// //     }

// //     return cpfRes.innerHTML = cpf.value
// // })





