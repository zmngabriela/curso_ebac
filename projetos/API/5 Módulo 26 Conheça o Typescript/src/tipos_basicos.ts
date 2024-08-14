//typescript separa quais os tipos de dados de cada variavel ou funcao

let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 27;
let altura: number = 1.75;

const nacionalidade: string = 'luxemburguesa';


// com typescript nao se pode ter array com diferentes dados, tipo misturando booleano, numbero e string

// formas de fazer array com um so tipo
const colega: string[] = ['lucas', 'fernanda'];
const tecnologias: Array<string> = ['html', 'css', 'js']

// temos o array somente de leitura: read only
const notas: ReadonlyArray<number> = [7, 8, 9, 10];
// o array normal vc pode fazer push, nesse de read only nao.


// tupla: pra fazer array misturanto tipo de dados no ts
const lista: [string, boolean, number] = ['gabriela', true, 26];

// tb podemos adicionar nomes:
const lista2: [nome: string, eGostosa: boolean, idade: number] = ['gabriela', true, 26];

// union type | : pra ter mais de um tipo de dado

let idadeAna: number | string = 25;
idadeAna = '25 anos';

// tipo any: usado quando vamos fazer integracao com backend em que nao sabemos o tipo de dado
let dadosApi: any;
dadosApi = 10;
dadosApi = [1, 2, 3];
dadosApi = true;
dadosApi = 'string';

