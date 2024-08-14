"use strict";
//typescript separa quais os tipos de dados de cada variavel ou funcao
let estaChovendo = false;
estaChovendo = true;
let idade = 27;
let altura = 1.75;
const nacionalidade = 'luxemburguesa';
// com typescript nao se pode ter array com diferentes dados, tipo misturando booleano, numbero e string
// formas de fazer array com um so tipo
const colega = ['lucas', 'fernanda'];
const tecnologias = ['html', 'css', 'js'];
// temos o array somente de leitura: read only
const notas = [7, 8, 9, 10];
// o array normal vc pode fazer push, nesse de read only nao.
// tupla: pra fazer array misturanto tipo de dados no ts
const lista = ['gabriela', true, 26];
// tb podemos adicionar nomes:
const lista2 = ['gabriela', true, 26];
// union type | : pra ter mais de um tipo de dado
let idadeAna = 25;
idadeAna = '25 anos';
// tipo any: usado quando vamos fazer integracao com backend em que nao sabemos o tipo de dado
let dadosApi;
dadosApi = 10;
dadosApi = [1, 2, 3];
dadosApi = true;
dadosApi = 'string';
