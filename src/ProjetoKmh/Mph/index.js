let quilometro = document.getElementById('kmp')
let milha = document.getElementById('mph')
let saida = document.getElementById('saida')
let saidamph = document.getElementById('saidamph')
Convertekm = () =>{

let km = Number(quilometro.value)
let resultado1 = km * 0.621371

saida.innerText = `${resultado1} Mph`
}

Convertemp = () =>{
let m = Number(milha.value)
let resultado2 = m * 1.60934421012

saidamph.innerText = `${resultado2} Km/h`
}