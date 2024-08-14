// Object Oriented Programming

// antes do ES6+ o js a programacao orientada a objetos era feita atravez de funcoes construtoras

function Pokemon(nomePokemon, tipoPokemon) { // os parametros podem ser os mesmos nomes das chaves do objeto
    this.nome = nomePokemon,
    this.tipo = tipoPokemon
}

const pikachu = new Pokemon('Pikachu', 'Eletrico');

console.log(pikachu);

// com o ES6+ foi introduzido a classe no js

class Pokemon1 {
    nome = '';
    tipo = '';
}

const eve = new Pokemon1();

// podemos passar os valores assim:
eve.nome = 'Eve';
eve.tipo = 'Ar';

console.log(eve);

// tb podemos passar os valores como parametros, mas dentro da classe temos que criar uma funcao constructor

class Pokemon2 {
    // nome = ''; // nao precisamos usar isso se usamor o construtor
    // tipo = '';

    #hp = 100; // encapsulamento (criando campo privado)

    constructor(nome, tipo) {
        this.nome = nome,
        this.tipo = tipo
    }

    // outra mudanca que tivemos foi nos metodos - funcao dentro das classes 
    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}.`);
    }

    // encapsulamento, que e a capacidade de tornas alguns metodos e funcoes privadas, acessiveis dentro da classe
    recebeuAtaque() {
        this.#hp -= 10;
        console.log(`${this.nome} recebeu um ataque. -10 HP`)
    }

    // pra voltar a acessar o charmander.hp privado:
    exibeHP() {
        console.log(this.#hp);
    }
}

const bulbassauro = new Pokemon2('Bulbassauro', 'Agua');
bulbassauro.atacar('squiiiiirt');

console.log(bulbassauro);


// heranca (uma classe pode ser herdeira de outra)
    // o pikachu nesse caso tb e uma classe pois pode ter pikachu do ash e de outros hunters

class Charmander extends Pokemon2 {

// tb podemos ja passar um valor aqui dentro pra nao ficar passando em todas as instancias
constructor() {
    // chamar o construtor da classe mae/superior
    super('Charmander', 'Fogo');
}

// polimorfismo, que e a capacidade de fazer uma tarefa de varias formas
    // por exemplo a funcao atacar, ja que varios pokemons podem atacar e da pra usar isso em outras classes
    atacar() { // com ou sem o construtor na classe filha, podemos usar o this assim como na classe mae
        console.log(`${this.nome} atacou com Rojao. HP +20`);
    };
}

const charmander = new Charmander();
console.log(charmander);

// quando fazemos a heranca, as instancias da classe filha tb sao as mesmas da classe mae
console.log(charmander instanceof Charmander); // true
console.log(charmander instanceof Pokemon2); // true

charmander.recebeuAtaque();
console.log(`HP: ${charmander.hp}`);
charmander.atacar();
console.log(`HP: ${charmander.hp}`);

// encapsulamento: como esse valor de hp e publico, da pra ser alteravel facilmente

charmander.hp = 5000;
console.log(charmander.hp);

charmander.exibeHP();

// aqui entra uma versao mais recente do ES que e criar campos privados:
// esse metodo usa # na frente de atributos

// agora depois disso, se eu tento usar chamander.hp - o hp nem aparece mais no vscode
// se a gente faz charmander.hp = 5000; ele ate funciona mas nao vai mais alterar o valor do hp da classe
// ele vai criar um novo atributo publico chamado hp





