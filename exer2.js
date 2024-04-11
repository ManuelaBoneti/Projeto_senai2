// atividade 2
let peso = parseFloat(prompt("Qual o seu peso em quilogramas?"));
let altura = parseFloat(prompt("Qual a sua altura em metros?"));
let Imc;

function validarImc(parPeso, parAltura) {
    return parPeso/(parAltura*parAltura);
}
Imc = validarImc(peso, altura)
alert(`O seu IMC é de ${Imc.toFixed(2)}`);

// atividade 3
let numero = parseInt(prompt("Digite um número"));

function criarFatorial(parNum) {
    let resultado = parNum
    if (parNum === 0 || parNum===1){
        return 1;
    }
    else {
        while(parNum >1) {
            parNum --;
            resultado *= parNum; //resultado = parNum*parNum
        }
        return resultado;
    }
}
resultado = criarFatorial(numero);
alert(`A fatorial de ${numero} é ${resultado}`);

// atividade 4
let numero = parseFloat(prompt("Digite um valor em real"));
let dolar;
function converterDolar(parNumero) {
    return parNumero*4.80;
}

dolar = converterDolar(numero);
alert(`${numero} reais em dólar é ${dolar.toFixed(2)}`);
    
// atividade 5
let altura = parseFloat(prompt("Qual a altura da sua sala?"));
let largura = parseFloat(prompt("Qual a largura da sua sala?"));

function validarArea(parAltura,parLargura) {
    return parAltura*parLargura
}
let area = validarArea(altura, largura)

function validarPerimetro(parAltura,parLargura) {
    return parAltura*2 + (parLargura*2)
}
let perimetro = validarPerimetro(altura, largura)

alert(`A área da sua sala é de ${area} metros e o seu perímetro é de ${perimetro} metros`);

// atividade 6
let raio = parseFloat(prompt("Qual o raio da sua sala circular?"));

function validarArea(parRaio) {
    return (parRaio*parRaio)*3.14;
}
let area = validarArea(raio)

function validarPerimetro(parRaio) {
    return 3.14 + 3.14*(parRaio);
}
let perimetro = validarPerimetro(raio)

alert(`A área da sua sala circular é de ${area} metros e o seu perímetro é de ${perimetro} metros`);

// atividade 7
let numero = parseInt(prompt("Escolha um número"));
let i;

function validarTabuada(parNumero) {
    for(i = 1; i <=10; i++){
        alert(`${parNumero} x ${i} = ${parNumero*i}`);
    }
}
validarTabuada(numero);
