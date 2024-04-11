let numero = parseInt(prompt("Escolha um número"));
let i;

function validarTabuada(parNumero) {
    for(i = 1; i <=10; i++){
        alert(`${numero} x ${i} = ${numero*i}`);
    }

}
validarTabuada(numero);