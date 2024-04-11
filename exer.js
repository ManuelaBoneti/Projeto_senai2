let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do desafio'

function validarConsole() {
    console.log("O botão foi clicado");
}

function validarAlert() {
    alert("Eu amo JS");
}

function validarPrompt() {
    let cidade = prompt("Fale o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function validarSoma() {
    let numero1 = parseInt(prompt("Digite um número inteiro"));
    let numero2 = parseInt(prompt("Digite um número inteiro"));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${soma}`);
}

// atividade 3
function verificarConsole() {
    console.log("Olá, mundo!");
}
verificarConsole();

// atividade 4
let nome = prompt("Digite o seu nome");
function verificarConsole(parNome) {
    console.log(`Olá, ${parNome}`);
}
verificarConsole(nome); // genérico
verificarConsole("manu");

// atividade 5
let numero = parseInt(prompt("Digite um número"));
function verificarConsole(numero1) {
    return numero1*2
}
let resultado = verificarConsole(numero)
alert(`O dobro de ${numero} é ${resultado}`);

// atividade 6
let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite um número"));
let n3 = parseInt(prompt("Digite um número"));

function calcularMedia((parN1, parN2 ,parN3);) {
    return parseInt (parN1+parN2+parN3)/3;
}
let media = calcularMedia(n1, n2, n3);
alert(`A média é ${media.toFixed(2)}`);

// atividade 7
let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite um número"));

function maiorNumero(parNum1, parNum2) {
    if (parNum1 > parNum2) {
        return parNum1;
    }
    else {
        return parNum2;
    }
}
maior = maiorNumero(n1, n2);
alert(`O maior número é ${maior}`);

// atividade 8 
let n1 = parseInt(prompt("Digite um número"));

function calcularMultiplicacao(parNum1) {
    return parNum1*parNum1
}
let resultado = calcularMultiplicacao(n1)
alert(`${n1} x ${n1} = ${resultado}`)
