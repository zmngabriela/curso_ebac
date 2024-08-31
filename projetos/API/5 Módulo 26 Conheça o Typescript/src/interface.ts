class Conta {
    numeroConta: number;
    saldo: number = 0;

    // pra definir o numeroaconta, saldo ja ta definido
    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
}

class contaSalario extends Conta {
    // metodo
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean; 
    taxaTransferencia: number;
    // transferir(valor, destinatario) {
    //     destinatario.saldo += valor; // na interface nao podemos colocar o codigo pronto
    // } // so colocamos o que tem q ser adicionado de metodo por quem usar
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional, IExemplo3 {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
}

// uma classe pode herdar de apenas de uma classe, porem interfaces podemos implementar em quantas classes quisermos

const contaMaria: ITransacional = {
    //cntrl + espaco pra ver tudo oq precisa implementar pra validar essa interface
}