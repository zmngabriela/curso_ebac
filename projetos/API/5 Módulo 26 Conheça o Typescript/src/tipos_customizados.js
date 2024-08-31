"use strict";
const alunos = [
    {
        nome: 'carlos',
        cursos: ['frontend', 'ux'],
        idade: 27
    },
    {
        nome: 'amanda',
        cursos: ['frontend', 'python'],
        idade: 25
    }
];
// alunos.push('julia');
// deu erro, pq o ts viu que temos um tipo customizado, objeto com string, string[] e numbero
alunos.push({
    nome: 'julia',
    cursos: ['backend', 'python'],
    idade: 30
}); // assim funciona
const alunos2 = [
    {
        nome: 'carlos',
        cursos: ['frontend', 'ux'],
        idade: 27
    },
    {
        nome: 'amanda',
        cursos: ['frontend', 'python'],
        idade: 25
    }
];

const novoAluno = {
    nome: 'lucas',
    idade: 23
};

function exibeAluno(aluno) {
    console.log(aluno.nome);
}
