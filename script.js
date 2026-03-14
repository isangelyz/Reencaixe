function avaliar(){

let integridade = document.getElementById("integridade").value
let resistencia = document.getElementById("resistencia").value
let inchamento = document.getElementById("inchamento").value
let danos = document.getElementById("danos").value
let contaminacao = document.getElementById("contaminacao").value

let resultado = ""

if(
integridade == "boa" &&
resistencia == "alta" &&
inchamento == "baixo" &&
danos == "nenhum" &&
contaminacao == "nenhuma"
){

resultado = `
Reutilização Direta

Placas estruturalmente íntegras
Apenas adaptação dimensional necessária
Maior eficiência ambiental
`

}

else if(
integridade != "ruim" &&
contaminacao != "grave"
){

resultado = `
Reprocessamento Parcial

Danos moderados
Trituracão e mistura com fibras novas
Proporção recomendada: até 24% de fibra reciclada
`

}

else{

resultado = `
Não recomendado para reutilização estrutural

Possível uso para energia ou partes não estruturais do móvel
Motivos possíveis:
Contaminação química severa
Umidade excessiva
Degradação estrutural irreversível
`

}

document.getElementById("resultado").innerText = resultado

}
