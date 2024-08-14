// o map e uma estrutura tipo um dicionario
// e um conjunto de valoes. esses valores sao como objetos
// temos chave e valor

let meuMap = new Map();

meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');
// com o set, damos dados pro map

console.log(meuMap);

// pra recuperar um valor no map:

const nome = meuMap.get('nome');

console.log(nome);

// pra recuperar a quantidade de items dentro do map:

meuMap.size;

console.log(meuMap.size);

// pra identificar se uma chave existe dentro do map:

meuMap.has('nome');

console.log(meuMap.has('nome'));

// pra remover todos os items no map:

// meuMap.clear();

// console.log(meuMap.size);

// pra fazer uma iteracao com o for dentro do map:

for (let chave of meuMap.keys()) {
    console.log(chave);
}

// pra recuperar os valores: 

for (let valor of meuMap.values()) {
    console.log(valor);
}

// fizemos o for pelas entradas que tem no map
// oq e entrada? sao os items compostos por chave e valor

// pra recuperar as entradas inteiras:

for (let entrada of meuMap.entries()) {
    console.log(entrada);
} // vai entregar chaves em um array, e valores em outro array

// pra fazer a desestruturacao da array com chave e value na ordem:

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// pra deletar uma chave de um map:

meuMap.delete('stack');

console.log(meuMap);

// set

// e uma estrura mais rigida, nao tem chave e valor
// e os valores nao se podem repetir

const cpfs = new Set();

cpfs.add('0195737043');
cpfs.add('1195737043');
cpfs.add('2195737043');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());
// isso retorna a mesma coisa, pois a chave e value e a mesma

// todas as outras funcoes do map tambem estao disponiveis no set

// tb podemos interar no set e map atraves do forEach:

cpfs.forEach((valor) => {
    console.log(valor);
})

// criar uma listagem de itens unicos e deletar itens repetidos:
// nesse caso tenho uma array com itens repetidos
const array = ['Gian Souza', 'Gabriela Zimmermann', 'Leonardo Cadore', 'Gian Souza', 'Gabriela Zimmermann'];

// primeiro convertemos o array pra set:

const arraySet = new Set([...array]);

// o proprio set ja deleta os valores duplicados**
console.log(arraySet);

// pra converter um set pra um array:

const arraySemDuplicados = [...arraySet];
console.log(arraySemDuplicados);

// como diferenciar um set de um array? os array ficam dentro de colchetes e o set diz set na frente e fica dentro de chaves