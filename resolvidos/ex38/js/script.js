const deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
let res = document.querySelector('#nomes')

deuses.map((deus) => res.insertAdjacentHTML('beforeend', `<li>${deus}</li>`))