"use strict";
// tem como fazer a tipagem explicita, sem dizer qual o tipo
// o ts entende qual e o tipo de dado
let curso = 'front-end';
// curso = 10; erro
function calculaArea(base, altura) {
    return base * altura;
}
// com arrow funcion:
const calculaArea2 = (base, altura) => base * altura;
// com operador ...rest:
function somar(...numeros) {
    numeros.reduce(item => item * 2);
}
// quando tem um console.log na funcao
function somar2(...numeros) {
    console.log(numeros);
} // quando nao temos um retorno na funcao, temos um retorno vazio (void)
// tb podemos usar esse | nas funcoes:
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoTeste = teste(); // se passar o mouse em cima podemos ver os tipos que aceita
