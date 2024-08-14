"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return `${this.nome} disse oi`;
    }
}
// modificador: parte do encapsulamento de publico e privado
// no ts temos o protected que e meio e privado, mas que pode ser modificado fora da classe, apenas por classes que herdam dele
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.saldo2 = 0;
        this.numeroConta = numeroConta;
    }
    // metodos
    static retornaNumeroBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    depositar2(valor) {
        this.saldo2 += valor;
    }
}
// o modificador privado so e acecssivel na classe que foi criada
// mas se ele e protected, ai entao e acessivel em classes filhas
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo2 = valor * 2;
    }
}
// como essa instancia nao e a filha direta ou a propria classe, o atributo protected tb nao aparece aqui
const contaPedro = new ContaBancariaPessoaFisica(123456);
// vendo como funciona o static
ContaBancaria.retornaNumeroBanco();
