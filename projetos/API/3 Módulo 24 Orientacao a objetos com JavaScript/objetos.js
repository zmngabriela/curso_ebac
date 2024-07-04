// Objetos:

const carroJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vrum");
    }
}

const carroMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

// Fazer uma funcao construtora:

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vrum");
    }
}^

const carroJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroMaria2 = new Carro("Ka", "Ford", 2021, 2020)


console.log(carroJoao);
console.log(carroMaria);

// Pra saber os tipos de dados:

const nome = "Gabi";
const idade = 26;
const eMaiorIdade = true;
const conhecimentos = ["html", "css", "js"];

const pessoa = {
    nome = nome,
    idade = idade,
    eMaiorIdade = eMaiorIdade,
    conhecimentos = conhecimentos
}

// Nesse caso do typeof ele nao separa se o carroMaria2 e uma funcao construtora etc
// JS entende que todo tipo de array, funcao construtora e objeto, sao diferentes, todos vao aparecer como objeto no terminal

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof eMaiorIdade);
console.log(typeof conhecimentos);
console.log(typeof carroMaria2);

// pra saber se o carroMaria2 e uma instancia de Carro, precisamos fazer:

console.log(carroMaria2 instanceof Carro);
console.log(conhecimentos instanceof Array);

// Acessar atributos de objetos

console.log(pessoa.nome);
// ou
console.log(pessoa['nome']);

// tambem da pra pra acessar um atributo dinamico

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

// Pra saber se o atributo existe em um objeto:

if (pessoa['sobrenome']) {
    console.log('a pessoa tem um sobrenome');
}

// *Adicionando sobrenome na pessoa:

pessoa['sobrenome'] = 'zimmermann';

// Se o sobrenome tiver como null ou undefined, o JS vai verificar e se esse for o caso, nao vai realizar o codigo
// Pra realizar o codigo mesmo se o valor for null ou undefined:

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

// Mesmo o objeto sendo uma const, seus atributos sao mutaveis
// Da pra vir e fazer:

pessoa.nome = 'daniela';

// Se nao quisermos que os atributos sejam variaveis:

Object.freeze(pessoa);

// Da pra tambem transformar objetos em arrays com todos os atributos:

Object.keys(pessoa);
console.log(Object.keys(pessoa).lenght);

// Transformar valores dos atributos em array:

Object.values(pessoa);
