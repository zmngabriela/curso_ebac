//arguments

function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));

// se tivesse mais argumentos, podemos ir adicionando, mas nao podemos criar um argumento indefinido
// sempre que usarmos um argumento, temos que passar ele, se nao vai dar erro

// function somar(a, b) {
//     return a + b + d; // erro
// }

// console.log(somar(10, 20, 30));

// No js temos uma palavra chamada arguments, que passa todos os argumentos que foram/vao ser usados na função.

function somar2(a, b, c) {
    console.log(arguments)
}

console.log(somar2(10, 20, 50));

// No terminal vai aparecer [Arguments] {'0’: 10, ‘1’: 20, ‘2’: 30}
// esse tipo de resultado é chamado de dicionário, pois tem a chave e valor.
// o arguments retorna uma estrutura como se fosse um objeto e conseguimos fazer uma interação nela como se fosse um array
// mas esse resultado não é um array. não conseguimos fazer forEach, reduce, map etc.. mas ele é iterável. conseguimos fazer um for nele.

function somar3(a, b) {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar3(10, 20));

//rest 

// No ES6+ surgiu o rest, que funciona como o arguments mas ele resulta em um array.
/// os 3 pontos significam que isso ta usando o rest, que pode receber inumeros argumentos.
/// com o rest podemos usar qualquer interação de array tipo reduce, forEach, map, filter etc.

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(20, 20, 30));

// essa possibilidade é otima mas tem restrições. 
// Não podemos ter 2 argumentos utilizando o rest operator na mesma funcao. 
// O rest operator passado numa funcao tem que ser o ultimo, nao pode ser o primeiro (exemplo function somarComRest(nome, sobrenome, ...numeros) {...

// spread

const numeros = [1, 2, 3, 4];
console.log(...numeros);

//spread tem a mesma aparecencia de um rest ...xxx
// a diferencia e que é usado pra concatenacao, console.log, preenchimento de objetos..
// Rest e pra argumento de funcao.

// outro exemplo:

const timeSP = ['Santos', 'Palmeiras', 'Sao Paulo', 'Bragantino']
const timeRio = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense']

const timesJuntos = [...timeSP, ...timeRio];
console.log(timesJuntos);
console.log('oi');

//queremos juntar o conteudo desses dois arrays:

const times = timeSP.concat(timeRio);

console.log(times);

// pra fazer isso tb podemos usar o operador spread:

const carroJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

const carroAna = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.8
}

// pra nao termos que repetir todo o codigo se so um atributo muda

// spread

const carroJulia2 = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

const carroAna2 = {
    ...carroJulia,
    motor: 1.8
}

console.log(carroAna2);

// desestruturação em objetos e em arrays:

const motorCarroAna = carroAna.motor;

// com a desestruturação a gente consegue fazer tudo isso em uma atribuição de uma variável:
// Peguei o atributo motor do objeto carro e atribui a uma variável chamada motorCarroXX
// nome da variavel eh motor
const { motor } = carroAna2;

// Se o carroJulia tb tem motor, poderia dar ruim

// const { motor } = carroJulia;

// com a desestruturação podemos criar alias pra nao ter os mesmos nomes de variáveis
// nome da variael e motorCarroNomexx
const { motor: motorCarroAna2 } = carroAna2;
const { motor: motorCarroJulia } = carroJulia;

// Se eu dar um console.log pras duas variáveis novas, no terminal vai aparecer o valor de motor.

console.log(motorCarroAna2);
console.log(motorCarroJulia);

// a desestruturação também pode ser usada em arrays:

const [ item1, item2, item3 ] = times;

console.log(item1);
console.log(item2);
console.log(item3);

// No terminal vai aparecer cada valor da array timesFutebol separados.
// Vai aparecer somente o numero de atributos que colocamos, tipo indice

// também podemos usar o rest aqui pra aparecer todos os atributos

const [ um, dois, tres, ...outros] = times;

console.log(um);
console.log(dois);
console.log(tres);
console.log(outros); // esse aqui vai aparecer como array, pois sao todos os outros que restaram.
