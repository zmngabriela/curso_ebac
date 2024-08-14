"use strict";
class Conta {
    // pra definir o numeroaconta, saldo ja ta definido
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
}
class contaSalario extends Conta {
    // metodo
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
// uma classe pode herdar de apenas de uma classe, porem interfaces podemos implementar em quantas classes quisermos
const contaMaria = {
//cntrl + espaco pra ver tudo oq precisa implementar pra validar essa interface
};
