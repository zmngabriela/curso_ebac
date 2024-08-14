class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) { // nome nao pode esar atras de um parametro opcional, se nao da erro
        this.nome = nome;
        this.renda = renda;
    }

    dizOi(): string {
        return `${this.nome} disse oi`
    }
}

// modificador: parte do encapsulamento de publico e privado

// no ts temos o protected que e meio e privado, mas que pode ser modificado fora da classe, apenas por classes que herdam dele

class ContaBancaria {
    private saldo: number = 0;
    protected saldo2: number = 0;
    public numeroConta: number; // nao precisa colocar public pq e o padrao

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    // metodos

    static retornaNumeroBanco() { // static pertence a classe, e nao a instancia
        return 125;
    }

    private getSaldo() { // tb pode ser privado
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    depositar2(valor: number) {
        this.saldo2 += valor
    }
}


// o modificador privado so e acecssivel na classe que foi criada
// mas se ele e protected, ai entao e acessivel em classes filhas
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo2 = valor * 2;
    }
}

// como essa instancia nao e a filha direta ou a propria classe, o atributo protected tb nao aparece aqui
const contaPedro = new ContaBancariaPessoaFisica(123456);

// vendo como funciona o static
ContaBancaria.retornaNumeroBanco();