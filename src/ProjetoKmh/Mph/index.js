let quilometro = document.getElementById('kmp')
let milha = document.getElementById('mph')
let saida = document.getElementById('saida')
let saidamph = document.getElementById('saidamph')
Convertekm = () =>{

let km = Number(quilometro.value)
let resultado1 = (km * 0.621371).toFixed(2)

saida.innerText = `${resultado1} Mph`
}

Convertemp = () =>{
let m = Number(milha.value)
let resultado2 = (m * 1.60934421012).toFixed(2)

saidamph.innerText = `${resultado2} Km/h`
}