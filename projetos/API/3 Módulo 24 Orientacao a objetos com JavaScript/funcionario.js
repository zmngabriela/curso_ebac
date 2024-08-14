// Aplicar herança

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }

    this.dizCargo = function() { // Da pra colocar isso aqui mas o mais normal seria colocar no elemento filho que tem esse atributo
        console.log(this.cargo); // atributo do filho
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo; // atributo publico

    // Encapsulamento: pra nao acontecer de qualquer um poder alterar algum atributo de um objeto, podemos deixar ele privado criando uma variante:
    let _salario = salario; // *o _ na frente e uma convencao pra dizer que e privado

    // Pra gente usar o _salario, ele nao pode ser chamado com notacao eg.: this._salario
    // Podemos fazer assim:

    this.getSalario = function() { // Segundo convernsao, esse tipo de funcao pra retornar/recuperar um valor e chamada se getters (get)
        return _salario;
    }

    this.setSalario = function(valor) { // // Segundo convernsao, esse tipo de funcao pra retornar/recuperar um valor e chamada se setters (set)
        if (typeof valor === 'number') {
            _salario = valor;
        } else {
            console.log('Por favor insira um número.')
        }
    }

    //Polimorfismo: fazer os mesmos metodos (this.etc) mas de modo diferente dependendo da funcao construtora
    // Se eu for fazer essa funcao na funcao filha, fica assim:
    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    // Pra chamar uma funcao dentro da outra, e nao precisar repetir o codigo
    // Essa funcao vai ser filha, e a outra que é chamada vai ser pai
    // Ou seja é uma herança: 
    // *(precisamos passar o this, que vai ser o mesmo this de funcionario, e entao os atributos do pai vao estar disponiveis no filho)
    // *(precisamos tb passar o argumento da funcao pai)

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "dev", 5000);
pessoa1.dizOi();
funcionario1.dizOi();

// Agora se dar console.log(funcionario1), o diz oi vai aparecer assim como aparece na funcao pai
// Tambem da pra fazer funcionario1.dizOi(); e vai funcionar igual em pessoa1

// Tambem da pra acessar os atributos do filho no pai:
// Adicionei no *pai*: this.dizCargo = function() { *cargo ta no filho
//      console.log(this.cargo); // atributo do filho
//  }

funcionario1.dizCargo(); // funciona

// Atencao que se formos fazer pessoa1.dizCargo(); vai dar um erro undefined, pois cargo nao ta dentro do pai, e sim do filho
// ele so e acessado pelo filho. por isso esse tipo de funcao que usa atributo do elemento filho e melhor adicionar no elemento filho mesmo ja, pra nao dar erro

console.log(funcionario1.getSalario());
funcionario1.setSalario(4000); // atualiza o salario
console.log(funcionario1.getSalario());

funcionario1.aumento();
console.log(funcionario1.getSalario());

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    //Polimorfismo: se eu for fazer essa funcao numa nova funcao construtora, por exemplo pq ele tem que ter um aumento de 7% (1.07), fazemos assim:
    // Polimorfismo de sobrescrita de métodos Você pode criar uma hierarquia de classes e definir métodos com o mesmo nome em classes derivadas (filhas) que substituam a implementação do método da classe base (pai). Isso permite que você chame o método de forma polimórfica e obtenha o comportamento específico da classe concreta.
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

const funcionario2 = new Estagiario("Eduardo");

funcionario2.aumento();
console.log(funcionario2.getSalario());

// Agora imagina que tem outro nivel:

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario3 = new Gerente("Paula");

funcionario3.aumento();
console.log(funcionario3.getSalario());

// Polimorfismo de sobrecarga de métodos Como o JavaScript não suporta sobrecarga de métodos com base em tipos de parâmetros, você pode simular o polimorfismo de sobrecarga verificando os tipos de parâmetros em tempo de execução.
