//variáveis
const menorValor = 100
const maiorValor = 1000
const numeroSecreto = NumeroAleatorio()

console.log(numeroSecreto)

function NumeroAleatorio() {
    return parseInt(Math.random()*maiorValor)
}

// carregando informações no DOM
document.getElementById('menor-valor').innerHTML = menorValor;
document.getElementById('maior-valor').innerHTML = maiorValor;

